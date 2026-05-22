import { OrderProduct, ShippingAddress } from '../auth/types';
import { httpRequest } from '../../lib/httpClient';
import { ApiRequestError } from '../../lib/apiContract';

export interface CreateQuoteData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  organization: string;
  taxId?: string;
  products: OrderProduct[];
  notes?: string;
}

export interface Quote {
  id: string;
  quoteNumber: string;
  userId: string;
  vendorId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  organization: string;
  taxId?: string;
  items: OrderProduct[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  status: 'pendiente' | 'en_revision_vendedor' | 'aprobado_vendedor' | 'rechazado_vendedor' | 'en_revision_admin' | 'aprobado' | 'rechazado' | 'convertida';
  customerNotes?: string;
  vendorNotes?: string;
  adminNotes?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
  vendorApprovedAt?: string;
  adminApprovedAt?: string;
  convertedToOrderAt?: string;
  orderId?: string;
}

export interface QuoteNotification {
  id: string;
  userId: string;
  quoteId: string;
  type: 'quote_created' | 'vendor_approved' | 'vendor_rejected' | 'admin_approved' | 'admin_rejected' | 'converted_to_order';
  message: string;
  read: boolean;
  createdAt: string;
}

class QuoteService {
  /**
   * Crea una nueva cotización
   */
  async createQuote(quoteData: CreateQuoteData): Promise<Quote> {
    // Calcular totales
    const subtotal = quoteData.products.reduce(
      (sum, p) => sum + (p.subtotal || (p.quantity * (p.unitPrice || p.price || 0))), 
      0
    );
    const tax = Math.round(subtotal * 0.19); // IVA 19%
    const discount = 0;
    const total = subtotal + tax - discount;

    const [firstName, ...lastNameParts] = quoteData.customerName.trim().split(/\s+/);
    const lastName = lastNameParts.join(' ') || 'Cliente';

    const response = await httpRequest<{
      quoteId: string;
      status: Quote['status'];
      requestedAt: string;
    }>('/api/quotes', {
      method: 'POST',
      body: {
        email: quoteData.customerEmail,
        items: quoteData.products.map(p => ({
          productId: p.productId || p.id || '',
          sku: p.sku || p.productId || p.id || '',
          name: p.productName || p.name || '',
          quantity: p.quantity,
          unitPrice: p.unitPrice || p.price || 0,
        })),
        shippingAddress: {
          firstName: firstName || 'Cliente',
          lastName,
          addressLine1: quoteData.organization || 'Pendiente por confirmar',
          city: 'Pendiente',
          postalCode: '0000000',
          country: 'Chile',
          phone: quoteData.customerPhone,
        },
        paymentMethod: 'cash_on_delivery',
        notes: quoteData.notes
      }
    });

    return {
      id: response.quoteId,
      quoteNumber: response.quoteId,
      userId: 'public',
      vendorId: 'pendiente',
      customerName: quoteData.customerName,
      customerEmail: quoteData.customerEmail,
      customerPhone: quoteData.customerPhone,
      organization: quoteData.organization,
      taxId: quoteData.taxId,
      items: quoteData.products,
      subtotal,
      discount,
      tax,
      total,
      status: response.status,
      customerNotes: quoteData.notes,
      createdAt: response.requestedAt,
      updatedAt: response.requestedAt,
    };
  }

  /**
   * Obtiene cotizaciones pendientes para el vendedor
   */
  async getVendorPendingQuotes(): Promise<Quote[]> {
    const response = await httpRequest<Quote[] | { items?: Quote[] }>('/api/quotes/vendor/pending');
    return Array.isArray(response) ? response : response.items || [];
  }

  /**
   * Aprobar/rechazar cotización como vendedor
   */
  async vendorApproveQuote(quoteId: string, approved: boolean, notes?: string): Promise<Quote> {
    const response = await httpRequest<Quote | { quote: Quote }>(`/api/quotes/${quoteId}/vendor-approve`, {
      method: 'POST',
      body: { approved, notes }
    });
    return 'quote' in response ? response.quote : response;
  }

  /**
   * Aprobar/rechazar cotización como admin
   */
  async adminApproveQuote(quoteId: string, approved: boolean, notes?: string): Promise<Quote> {
    const response = await httpRequest<Quote | { quote: Quote }>(`/api/quotes/${quoteId}/admin-approve`, {
      method: 'POST',
      body: { approved, notes }
    });
    return 'quote' in response ? response.quote : response;
  }

  /**
   * Convertir cotización aprobada a orden
   */
  async convertQuoteToOrder(
    quoteId: string, 
    paymentMethod: string, 
    shippingAddress: ShippingAddress
  ): Promise<any> {
    const response = await httpRequest(`/api/quotes/${quoteId}/convert-to-order`, {
      method: 'POST',
      body: { paymentMethod, shippingAddress }
    });
    return response;
  }

  /**
   * Obtener notificaciones
   */
  async getNotifications(unreadOnly: boolean = false): Promise<QuoteNotification[]> {
    const url = unreadOnly ? '/api/notifications?unreadOnly=true' : '/api/notifications';
    try {
      const response = await httpRequest<QuoteNotification[]>(url);
      return response;
    } catch (error) {
      if (error instanceof ApiRequestError && error.status === 404) {
        return [];
      }
      throw error;
    }
  }

  /**
   * Marcar todas las notificaciones como leídas
   */
  async markAllNotificationsAsRead(): Promise<void> {
    try {
      await httpRequest('/api/notifications', {
        method: 'PATCH',
        body: { markAllAsRead: true }
      });
    } catch (error) {
      if (!(error instanceof ApiRequestError && error.status === 404)) {
        throw error;
      }
    }
  }

  /**
   * Marcar una notificación como leída
   */
  async markNotificationAsRead(notificationId: string): Promise<void> {
    try {
      await httpRequest(`/api/notifications/${notificationId}`, {
        method: 'PATCH',
        body: { read: true }
      });
    } catch (error) {
      if (!(error instanceof ApiRequestError && error.status === 404)) {
        throw error;
      }
    }
  }
}

export const quoteService = new QuoteService();
