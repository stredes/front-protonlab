import { ContactMessage } from './types';
import { httpRequest } from '../../lib/httpClient';

export async function sendContactMessage(message: ContactMessage): Promise<{ success: boolean }> {
  const [firstName, ...lastNameParts] = message.name.trim().split(/\s+/);
  const lastName = lastNameParts.join(' ') || 'Contacto';

  await httpRequest<{ quoteId: string }>('/api/quotes', {
    method: 'POST',
    body: {
      email: message.email,
      items: [
        {
          productId: 'contact-message',
          sku: 'contact-message',
          name: 'Mensaje de contacto desde el sitio',
          quantity: 1,
          unitPrice: 0,
        },
      ],
      shippingAddress: {
        firstName: firstName || 'Contacto',
        lastName,
        addressLine1: 'Formulario web',
        city: 'Pendiente',
        postalCode: '0000000',
        country: 'Chile',
      },
      paymentMethod: 'cash_on_delivery',
      notes: message.message,
    },
  });

  return { success: true };
}
