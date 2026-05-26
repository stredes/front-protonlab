export type AdminAssistantUserRole = 'admin' | 'root';

export interface AdminAssistantSuggestion {
  id: string;
  label: string;
  prompt: string;
  icon: string;
  domain: 'sales' | 'clients' | 'orders' | 'inventory' | 'vendors';
}

export interface AdminAssistantChatRequest {
  question: string;
  schema?: string;
  dialect?: string;
  businessContext?: string;
}

export interface AdminAssistantChatResponse {
  sql: string;
  answer: string;
  explanation: string;
  assumptions: string[];
  evidence: string[];
  notice: string | null;
  model: string;
  meta: {
    requestId?: string;
    status?: 'backend_pending' | 'connected';
  };
}

export const ADMIN_ASSISTANT_ENDPOINT = '/api/ai/sql-assistant';

const ADMIN_ASSISTANT_SUGGESTIONS: AdminAssistantSuggestion[] = [
  {
    id: 'sales-by-vendor',
    label: 'Ventas por vendedor',
    prompt: 'Muéstrame las ventas del mes agrupadas por vendedor.',
    icon: '📈',
    domain: 'sales',
  },
  {
    id: 'inactive-clients',
    label: 'Clientes inactivos',
    prompt: 'Qué clientes no han comprado en los últimos 60 días.',
    icon: '🤝',
    domain: 'clients',
  },
  {
    id: 'pending-orders',
    label: 'Pedidos pendientes',
    prompt: 'Resume los pedidos pendientes por estado y prioridad.',
    icon: '📦',
    domain: 'orders',
  },
  {
    id: 'top-products',
    label: 'Top productos',
    prompt: 'Cuáles son los productos con mayor rotación este mes.',
    icon: '🧪',
    domain: 'inventory',
  },
  {
    id: 'vendor-portfolio',
    label: 'Cartera por vendedor',
    prompt: 'Compara la cartera de clientes asignada a cada vendedor.',
    icon: '👥',
    domain: 'vendors',
  },
  {
    id: 'risk-accounts',
    label: 'Cuentas en riesgo',
    prompt: 'Detecta cuentas con caída de pedidos o actividad comercial.',
    icon: '⚠️',
    domain: 'clients',
  },
];

export function getAdminAssistantSuggestions(): AdminAssistantSuggestion[] {
  return ADMIN_ASSISTANT_SUGGESTIONS;
}

export function buildAdminAssistantRequest(
  message: string,
  userRole: AdminAssistantUserRole = 'admin'
): AdminAssistantChatRequest {
  const normalizedQuestion = message.trim();

  return {
    question: normalizedQuestion,
    dialect: 'PostgreSQL',
    businessContext:
      userRole === 'root'
        ? 'ERP interno de Proton Lab con visión global root/admin. El backend debe usar su AI Context Registry operativo.'
        : 'ERP interno de Proton Lab para administración comercial y operativa. El backend debe usar su AI Context Registry operativo.',
  };
}

export function normalizeAdminAssistantResponse(
  response: Partial<AdminAssistantChatResponse>
): AdminAssistantChatResponse {
  return {
    sql: response.sql || '-- Sin SQL generado',
    answer: response.answer || response.explanation || 'Sin respuesta del asistente.',
    explanation: response.explanation || 'Sin explicación del asistente.',
    assumptions: response.assumptions || [],
    evidence: response.evidence || [],
    notice: response.notice || null,
    model: response.model || 'modelo-no-reportado',
    meta: {
      requestId: response.meta?.requestId,
      status: response.meta?.status || 'connected',
    },
  };
}

export function createPendingAssistantResponse(
  question: string
): AdminAssistantChatResponse {
  return {
    sql: '-- El backend aún no respondió a esta consulta.',
    answer:
      'Estoy preparando la respuesta. Si la consulta revisa muchos datos, puede demorar un poco más.',
    explanation:
      'La interfaz está preparada, pero todavía no hay una respuesta confirmada del backend para la consulta actual.',
    assumptions: [
      `Consulta solicitada: ${question.trim()}`,
      `Endpoint esperado: ${ADMIN_ASSISTANT_ENDPOINT}`,
    ],
    evidence: [],
    notice: null,
    model: 'backend_pending',
    meta: {
      requestId: 'pending-backend',
      status: 'backend_pending',
    },
  };
}
