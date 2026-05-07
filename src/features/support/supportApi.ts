import { httpRequest } from '../../lib/httpClient';
import { SupportRequest } from './types';

function mapServiceType(type: SupportRequest['type']):
  | 'pre_venta'
  | 'demostracion'
  | 'problema_tecnico'
  | 'mantenimiento_preventivo'
  | 'otro' {
  switch (type) {
    case 'preventa':
      return 'pre_venta';
    case 'demostracion':
      return 'demostracion';
    case 'problema_tecnico':
      return 'problema_tecnico';
    case 'mantenimiento_preventivo':
      return 'mantenimiento_preventivo';
    default:
      return 'otro';
  }
}

export async function sendSupportRequest(request: SupportRequest): Promise<{ success: boolean }> {
  const [firstName, ...lastNameParts] = request.name.trim().split(/\s+/);
  const lastName = lastNameParts.join(' ') || 'Cliente';

  await httpRequest<{ quoteId: string }>('/api/quotes', {
    method: 'POST',
    body: {
      email: request.email,
      items: [
        {
          productId: `support-${mapServiceType(request.type)}`,
          sku: request.serial || request.equipment || 'support',
          name: `Solicitud de soporte: ${request.equipment}`,
          quantity: 1,
          unitPrice: 0,
        },
      ],
      shippingAddress: {
        firstName: firstName || 'Cliente',
        lastName,
        addressLine1: request.organization || 'Pendiente por confirmar',
        city: 'Pendiente',
        postalCode: '0000000',
        country: 'Chile',
        phone: request.phone || undefined,
      },
      paymentMethod: 'cash_on_delivery',
      notes: `${request.comment}\n\nEquipo: ${request.equipment}\nSerie: ${request.serial || 'N/A'}\nTipo: ${mapServiceType(request.type)}`,
    },
  });

  return { success: true };
}
