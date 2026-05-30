import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../features/auth/authStore';
import { authApi } from '../../features/auth/authApi';
import { Order, Vendor, SupportContact } from '../../features/auth/types';
import { isActiveQuoteStatus, isOperationalOrderStatus, isTerminalQuoteStatus } from '../../features/orders/orderFlow';
import { OrderCard } from '../../components/portal/OrderCard';
import { ContactCard } from '../../components/portal/ContactCard';
import Loader from '../../components/ui/Loader';
import { FadeIn } from '../../components/ui/FadeIn';

export function PartnerPortalPage() {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [support, setSupport] = useState<SupportContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'orders' | 'contacts'>('orders');

  const loadData = useCallback(async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const [ordersData, supportData] = await Promise.all([
        authApi.getOrders(user.id),
        authApi.getSupportContacts()
      ]);
      
      setOrders(ordersData);
      setSupport(supportData);

      if (user.vendorId) {
        const vendorData = await authApi.getVendor(user.vendorId);
        setVendor(vendorData || null);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const quoteRequests = orders.filter(o => isActiveQuoteStatus(o.status) || isTerminalQuoteStatus(o.status));
  const activeOrders = orders.filter(o => isOperationalOrderStatus(o.status) && o.status !== 'entregado' && o.status !== 'cancelado');
  const completedOrders = orders.filter(o => isOperationalOrderStatus(o.status) && (o.status === 'entregado' || o.status === 'cancelado'));

  if (!user) return null;

  return (
    <div className="portal-page">
      <FadeIn direction="up">
        <div className="portal-header">
        <div className="portal-header__info">
          <h1>Bienvenido, {user.name}</h1>
          <p className="muted">{user.company}</p>
        </div>
        <button onClick={logout} className="btn btn-secondary">
          Cerrar Sesión
        </button>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <div className="portal-stats">
        <div className="stat-card">
          <div className="stat-card__icon">📦</div>
          <div className="stat-card__content">
            <h3>{activeOrders.length}</h3>
            <p>Órdenes Activas</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">📋</div>
          <div className="stat-card__content">
            <h3>{quoteRequests.length}</h3>
            <p>Cotizaciones</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">✅</div>
          <div className="stat-card__content">
            <h3>{completedOrders.length}</h3>
            <p>Pedidos Completados</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">📞</div>
          <div className="stat-card__content">
            <h3>{support.length}</h3>
            <p>Contactos de Soporte</p>
          </div>
        </div>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <div className="portal-tabs">
        <button
          className={`portal-tab ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Mis Pedidos
        </button>
        <button
          className={`portal-tab ${activeTab === 'contacts' ? 'active' : ''}`}
          onClick={() => setActiveTab('contacts')}
        >
          Contactos
        </button>
        </div>
      </FadeIn>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="portal-content">
          {activeTab === 'orders' && (
            <div className="portal-orders">
              {activeOrders.length > 0 && (
                <section className="orders-section">
                  <h2>Órdenes de Compra Activas</h2>
                  <div className="orders-grid">
                    {activeOrders.map(order => (
                      <OrderCard key={order.id} order={order} onOrderUpdated={loadData} />
                    ))}
                  </div>
                </section>
              )}

              {quoteRequests.length > 0 && (
                <section className="orders-section">
                  <h2>Cotizaciones</h2>
                  <div className="orders-grid">
                    {quoteRequests.map(order => (
                      <OrderCard key={order.id} order={order} onOrderUpdated={loadData} />
                    ))}
                  </div>
                </section>
              )}

              {completedOrders.length > 0 && (
                <section className="orders-section">
                  <h2>Historial</h2>
                  <div className="orders-grid">
                    {completedOrders.map(order => (
                      <OrderCard key={order.id} order={order} onOrderUpdated={loadData} />
                    ))}
                  </div>
                </section>
              )}

              {orders.length === 0 && (
                <div className="empty-state">
                  <p>No tienes cotizaciones ni órdenes registradas</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="portal-contacts">
              {vendor && (
                <section className="contacts-section">
                  <h2>Tu Vendedor Asignado</h2>
                  <div className="contacts-grid">
                    <ContactCard contact={vendor} type="vendor" />
                  </div>
                </section>
              )}

              <section className="contacts-section">
                <h2>Soporte Protonlab</h2>
                <div className="contacts-grid">
                  {support.map(contact => (
                    <ContactCard key={contact.id} contact={contact} type="support" />
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
