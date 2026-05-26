import { describe, expect, it } from 'vitest';
import {
  buildAdminAssistantRequest,
  getAdminAssistantSuggestions,
  normalizeAdminAssistantResponse,
} from '../features/adminAssistant/adminAssistantContract';

describe('adminAssistantContract', () => {
  it('builds a backend-ready SQL assistant request payload', () => {
    const payload = buildAdminAssistantRequest('  Ventas del mes por vendedor  ');

    expect(payload.question).toBe('Ventas del mes por vendedor');
    expect(payload.dialect).toBe('PostgreSQL');
    expect(payload.schema).toBeUndefined();
    expect(payload.businessContext).toContain('AI Context Registry');
  });

  it('provides curated suggestions for the admin assistant', () => {
    const suggestions = getAdminAssistantSuggestions();

    expect(suggestions.length).toBeGreaterThanOrEqual(4);
    expect(new Set(suggestions.map((suggestion) => suggestion.id)).size).toBe(suggestions.length);
    expect(suggestions.every((suggestion) => suggestion.prompt.trim().length > 0)).toBe(true);
  });

  it('normalizes backend SQL assistant responses', () => {
    const response = normalizeAdminAssistantResponse({
      sql: 'SELECT id, status FROM orders LIMIT 10;',
      answer: 'Encontré pedidos recientes.',
      explanation: 'Devuelve pedidos recientes.',
      assumptions: ['La tabla orders existe.'],
      evidence: ['Pedido ORD-1'],
      notice: null,
      model: 'qwen2.5-coder:3b',
    });

    expect(response.answer).toBe('Encontré pedidos recientes.');
    expect(response.sql).toContain('SELECT id, status FROM orders');
    expect(response.explanation).toBe('Devuelve pedidos recientes.');
    expect(response.assumptions).toEqual(['La tabla orders existe.']);
    expect(response.evidence).toEqual(['Pedido ORD-1']);
    expect(response.model).toBe('qwen2.5-coder:3b');
  });
});
