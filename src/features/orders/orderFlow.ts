import type { Order } from '../auth/types';

export type OrderFlowStatus = Order['status'];

const activeQuoteStatuses = new Set<OrderFlowStatus>([
  'cotizacion',
  'pendiente_vendedor',
  'aprobado_vendedor',
  'pendiente_admin',
  'aprobado_admin',
]);

const terminalQuoteStatuses = new Set<OrderFlowStatus>(['rechazado']);

const operationalOrderStatuses = new Set<OrderFlowStatus>([
  'confirmado',
  'procesando',
  'enviado',
  'entregado',
  'cancelado',
]);

const warehouseOrderStatuses = new Set<OrderFlowStatus>([
  'confirmado',
  'procesando',
  'enviado',
  'entregado',
]);

export function isActiveQuoteStatus(status: OrderFlowStatus): boolean {
  return activeQuoteStatuses.has(status);
}

export function isTerminalQuoteStatus(status: OrderFlowStatus): boolean {
  return terminalQuoteStatuses.has(status);
}

export function isOperationalOrderStatus(status: OrderFlowStatus): boolean {
  return operationalOrderStatuses.has(status);
}

export function isWarehouseOrderStatus(status: OrderFlowStatus): boolean {
  return warehouseOrderStatuses.has(status);
}

export function getOrderFlowLabel(status: OrderFlowStatus): string {
  const labels: Record<OrderFlowStatus, string> = {
    cotizacion: 'Cotización nueva',
    pendiente_vendedor: 'Cotización pendiente de vendedor',
    aprobado_vendedor: 'Cotización aprobada por vendedor',
    pendiente_admin: 'Cotización pendiente de administración',
    aprobado_admin: 'Cotización aprobada por administración',
    rechazado: 'Cotización rechazada',
    confirmado: 'Orden de compra confirmada',
    procesando: 'Orden de compra en preparación',
    enviado: 'Orden de compra enviada',
    entregado: 'Orden de compra entregada',
    cancelado: 'Orden de compra cancelada',
  };

  return labels[status];
}
