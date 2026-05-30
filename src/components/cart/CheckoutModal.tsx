import { useState } from 'react';
import { FiX, FiUser, FiCheck, FiAlertCircle, FiMapPin, FiCreditCard } from 'react-icons/fi';
import { useCart } from '../../features/cart/cartContext';
import { quoteService, CreateQuoteData } from '../../features/quotes/quoteService';
import { orderService, CreateOrderData } from '../../features/cart/services/orderService';
import { toast } from '../ui/Toast';
import './CheckoutModal.css';

interface CheckoutModalProps {
  isOpen: boolean;
  mode: 'quote' | 'order';
  onClose: () => void;
  onSuccess: () => void;
}

type CheckoutStep = 'customer' | 'confirm';

type PaymentMethod = CreateOrderData['paymentMethod'];

export function CheckoutModal({ isOpen, mode, onClose, onSuccess }: CheckoutModalProps) {
  const { items, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('customer');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [customerData, setCustomerData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    organization: '',
    taxId: '',
  });

  const [shippingData, setShippingData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Chile',
    phone: '',
    contactName: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('transferencia');
  const [notes, setNotes] = useState('');

  const isOrderMode = mode === 'order';
  const total = items.reduce((sum, item) => sum + ((item.precio || item.price || 0) * item.quantity), 0);

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerData.customerName || !customerData.customerEmail || !customerData.customerPhone || !customerData.organization) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    if (isOrderMode && (!shippingData.street || !shippingData.city || !shippingData.state || !shippingData.contactName || !shippingData.phone)) {
      toast.error('Por favor completa los datos de despacho del pedido');
      return;
    }

    setStep('confirm');
  };

  const handleConfirmOrder = async () => {
    setIsSubmitting(true);
    
    try {
      const products = items.map(item => {
        const unitPrice = item.precio || item.price || 0;

        return {
          productId: item.id,
          productName: item.name,
          quantity: item.quantity,
          unitPrice,
          subtotal: unitPrice * item.quantity,
          id: item.id,
          name: item.name,
          price: unitPrice,
        };
      });

      if (isOrderMode) {
        const orderData: CreateOrderData = {
          customerName: customerData.customerName,
          customerEmail: customerData.customerEmail,
          customerPhone: customerData.customerPhone,
          organization: customerData.organization,
          taxId: customerData.taxId || undefined,
          products,
          shippingAddress: {
            ...shippingData,
            address: shippingData.street,
            region: shippingData.state,
            postalCode: shippingData.zipCode,
            fullName: shippingData.contactName,
          },
          paymentMethod,
          notes: notes || undefined,
        };

        await orderService.createOrder(orderData);
      } else {
        const quoteData: CreateQuoteData = {
        customerName: customerData.customerName,
        customerEmail: customerData.customerEmail,
        customerPhone: customerData.customerPhone,
        organization: customerData.organization,
        taxId: customerData.taxId || undefined,
        products,
        notes: notes || undefined,
        };

        await quoteService.createQuote(quoteData);
      }
      
      toast.success(
        isOrderMode
          ? '¡Pedido realizado exitosamente! Operaciones lo revisará pronto.'
          : '¡Cotización enviada exitosamente! Tu vendedor la revisará pronto.'
      );
      clearCart();
      onSuccess();
      onClose();
      
      // Reset form
      resetForm();
    } catch (error: any) {
      console.error(isOrderMode ? 'Error al crear pedido:' : 'Error al crear cotización:', error);
      toast.error(error.message || 'Error al enviar la solicitud. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep('customer');
    setCustomerData({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      organization: '',
      taxId: '',
    });
    setShippingData({
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'Chile',
      phone: '',
      contactName: '',
    });
    setPaymentMethod('transferencia');
    setNotes('');
  };

  const handleBack = () => {
    if (step === 'confirm') setStep('customer');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="checkout-modal-overlay" onClick={onClose} />
      <div className="checkout-modal">
        <div className="checkout-modal__header">
          <h2>{isOrderMode ? 'Realizar Pedido' : 'Solicitar Cotización'}</h2>
          <button className="checkout-modal__close" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="checkout-steps">
          <div className={`checkout-step ${step === 'customer' ? 'active' : ''} ${step === 'confirm' ? 'completed' : ''}`}>
            <div className="checkout-step__icon">
              {step === 'confirm' ? <FiCheck /> : <FiUser />}
            </div>
            <span>Información</span>
          </div>
          <div className="checkout-step__line" />
          <div className={`checkout-step ${step === 'confirm' ? 'active' : ''}`}>
            <div className="checkout-step__icon">
              <FiCheck />
            </div>
            <span>Confirmar</span>
          </div>
        </div>

        <div className="checkout-modal__content">
          {/* Customer Step */}
          {step === 'customer' && (
            <form onSubmit={handleCustomerSubmit} className="checkout-form">
              <h3>Información del Cliente</h3>
              
              <div className="form-group">
                <label htmlFor="customerName">Nombre Completo *</label>
                <input
                  id="customerName"
                  type="text"
                  value={customerData.customerName}
                  onChange={(e) => setCustomerData({ ...customerData, customerName: e.target.value })}
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="customerEmail">Email *</label>
                  <input
                    id="customerEmail"
                    type="email"
                    value={customerData.customerEmail}
                    onChange={(e) => setCustomerData({ ...customerData, customerEmail: e.target.value })}
                    placeholder="juan@empresa.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customerPhone">Teléfono *</label>
                  <input
                    id="customerPhone"
                    type="tel"
                    value={customerData.customerPhone}
                    onChange={(e) => setCustomerData({ ...customerData, customerPhone: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organización/Empresa *</label>
                <input
                  id="organization"
                  type="text"
                  value={customerData.organization}
                  onChange={(e) => setCustomerData({ ...customerData, organization: e.target.value })}
                  placeholder="Laboratorio Central"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="taxId">RUT/Tax ID (Opcional)</label>
                <input
                  id="taxId"
                  type="text"
                  value={customerData.taxId}
                  onChange={(e) => setCustomerData({ ...customerData, taxId: e.target.value })}
                  placeholder="76.XXX.XXX-X"
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notas Adicionales (Opcional)</label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Especifica cualquier requerimiento especial o información adicional..."
                  rows={4}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ddd' }}
                />
              </div>

              {isOrderMode && (
                <>
                  <h3>Datos de Despacho</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactName">Contacto de Recepción *</label>
                      <input
                        id="contactName"
                        type="text"
                        value={shippingData.contactName}
                        onChange={(e) => setShippingData({ ...shippingData, contactName: e.target.value })}
                        placeholder="Ej: María González"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="shippingPhone">Teléfono de Despacho *</label>
                      <input
                        id="shippingPhone"
                        type="tel"
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                        placeholder="+56 9 1234 5678"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="street">Dirección *</label>
                    <input
                      id="street"
                      type="text"
                      value={shippingData.street}
                      onChange={(e) => setShippingData({ ...shippingData, street: e.target.value })}
                      placeholder="Ej: Av. Providencia 1234"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">Ciudad *</label>
                      <input
                        id="city"
                        type="text"
                        value={shippingData.city}
                        onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                        placeholder="Ej: Santiago"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="state">Región *</label>
                      <input
                        id="state"
                        type="text"
                        value={shippingData.state}
                        onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                        placeholder="Ej: Metropolitana"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="zipCode">Código Postal</label>
                      <input
                        id="zipCode"
                        type="text"
                        value={shippingData.zipCode}
                        onChange={(e) => setShippingData({ ...shippingData, zipCode: e.target.value })}
                        placeholder="Ej: 7500000"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="paymentMethod">Método de Pago *</label>
                      <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                        required
                      >
                        <option value="transferencia">Transferencia</option>
                        <option value="credito_30">Crédito 30 días</option>
                        <option value="credito_60">Crédito 60 días</option>
                        <option value="credito_90">Crédito 90 días</option>
                        <option value="cheque">Cheque</option>
                        <option value="tarjeta">Tarjeta</option>
                        <option value="efectivo">Efectivo</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="checkout-form__actions">
                <button type="button" className="btn btn--secondary" onClick={onClose}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn--primary">
                  Continuar
                </button>
              </div>
            </form>
          )}
          {/* Confirm Step */}
          {step === 'confirm' && (
            <div className="checkout-confirm">
              <h3>{isOrderMode ? 'Confirmar Pedido' : 'Confirmar Cotización'}</h3>
              
              <div className="confirm-section">
                <h4><FiUser /> Información del Cliente</h4>
                <p><strong>{customerData.customerName}</strong></p>
                <p>{customerData.customerEmail}</p>
                <p>{customerData.customerPhone}</p>
                <p>{customerData.organization}</p>
                {customerData.taxId && <p className="muted">RUT/Tax ID: {customerData.taxId}</p>}
              </div>

              {isOrderMode && (
                <div className="confirm-section">
                  <h4><FiMapPin /> Despacho y Pago</h4>
                  <p><strong>{shippingData.contactName}</strong></p>
                  <p>{shippingData.street}</p>
                  <p>{shippingData.city}, {shippingData.state}</p>
                  <p><FiCreditCard /> {paymentMethod.replace('_', ' ')}</p>
                </div>
              )}

              <div className="confirm-section">
                <h4>Productos ({items.length})</h4>
                <div className="confirm-products">
                  {items.map(item => {
                    const unitPrice = item.precio || item.price || 0;

                    return (
                      <div key={item.id} className="confirm-product">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${(unitPrice * item.quantity).toLocaleString('es-CL')}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {notes && (
                <div className="confirm-section">
                  <h4>Notas</h4>
                  <p className="muted">{notes}</p>
                </div>
              )}

              <div className="confirm-total">
                <h3>Subtotal Estimado</h3>
                <h3 className="total-amount">${total.toLocaleString('es-CL')}</h3>
                <p className="muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  {isOrderMode
                    ? '* El pedido quedará disponible para operación y seguimiento interno'
                    : '* Precio final sujeto a aprobación del vendedor'}
                </p>
              </div>

              <div className="checkout-alert">
                <FiAlertCircle />
                <p>
                  {isOrderMode
                    ? 'La orden de compra entrará al flujo operativo de administración y bodega.'
                    : 'Tu solicitud será revisada por tu vendedor asignado. Recibirás una notificación cuando sea procesada.'}
                </p>
              </div>

              <div className="checkout-form__actions">
                <button 
                  type="button" 
                  className="btn btn--secondary" 
                  onClick={handleBack}
                  disabled={isSubmitting}
                >
                  Volver
                </button>
                <button 
                  type="button" 
                  className="btn btn--primary" 
                  onClick={handleConfirmOrder}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : isOrderMode ? 'Enviar Pedido' : 'Enviar Cotización'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
