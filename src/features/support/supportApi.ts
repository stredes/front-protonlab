import { httpRequest } from '../../lib/httpClient';
import { SupportRequest } from './types';

function mapServiceType(type: SupportRequest['type']):
  | 'preventa'
  | 'demostracion'
  | 'problema_tecnico'
  | 'mantenimiento_preventivo'
  | 'otro' {
  switch (type) {
    case 'preventa':
      return 'preventa';
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
  await httpRequest<{ ticket: { id: string } }>('/api/support/tickets', {
    method: 'POST',
    body: {
      ...request,
      type: mapServiceType(request.type),
    },
  });

  return { success: true };
}
