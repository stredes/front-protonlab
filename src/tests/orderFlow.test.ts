import { describe, expect, it } from 'vitest';
import {
  isActiveQuoteStatus,
  isOperationalOrderStatus,
  isWarehouseOrderStatus,
  getOrderFlowLabel,
} from '../features/orders/orderFlow';

describe('orderFlow', () => {
  it('separates active quotation statuses from operational purchase order statuses', () => {
    expect(isActiveQuoteStatus('pendiente_vendedor')).toBe(true);
    expect(isActiveQuoteStatus('aprobado_vendedor')).toBe(true);
    expect(isActiveQuoteStatus('confirmado')).toBe(false);

    expect(isOperationalOrderStatus('confirmado')).toBe(true);
    expect(isOperationalOrderStatus('procesando')).toBe(true);
    expect(isOperationalOrderStatus('aprobado_vendedor')).toBe(false);
  });

  it('sends only confirmed operational orders to warehouse', () => {
    expect(isWarehouseOrderStatus('confirmado')).toBe(true);
    expect(isWarehouseOrderStatus('procesando')).toBe(true);
    expect(isWarehouseOrderStatus('aprobado_admin')).toBe(false);
    expect(isWarehouseOrderStatus('pendiente_vendedor')).toBe(false);
  });

  it('labels quote and purchase order states explicitly', () => {
    expect(getOrderFlowLabel('pendiente_vendedor')).toBe('Cotización pendiente de vendedor');
    expect(getOrderFlowLabel('confirmado')).toBe('Orden de compra confirmada');
    expect(getOrderFlowLabel('enviado')).toBe('Orden de compra enviada');
  });
});
