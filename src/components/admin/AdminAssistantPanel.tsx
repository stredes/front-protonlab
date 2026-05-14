import { FormEvent, useState } from 'react';
import { ApiRequestError } from '../../lib/apiContract';
import { queryAdminAssistant } from '../../features/adminAssistant/adminAssistantApi';
import {
  AdminAssistantChatResponse,
  AdminAssistantMessage,
  AdminAssistantUserRole,
  buildAdminAssistantRequest,
  createPendingAssistantResponse,
  getAdminAssistantSuggestions,
} from '../../features/adminAssistant/adminAssistantContract';

interface AdminAssistantPanelProps {
  userName: string;
  userRole: AdminAssistantUserRole;
}

type AssistantErrorState = {
  message: string;
  code?: string;
  requestId?: string;
} | null;

function createMessageId(prefix: 'assistant' | 'user') {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.round(Math.random() * 10000)}`;
}

function createAssistantMessage(content: string): AdminAssistantMessage {
  return {
    id: createMessageId('assistant'),
    role: 'assistant',
    content,
    timestamp: new Date().toISOString(),
  };
}

function createUserMessage(content: string): AdminAssistantMessage {
  return {
    id: createMessageId('user'),
    role: 'user',
    content,
    timestamp: new Date().toISOString(),
  };
}

function exportAssistantSql(response: AdminAssistantChatResponse) {
  if (!response.sql.trim()) {
    return;
  }

  const blob = new Blob([response.sql], { type: 'text/sql;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `admin-assistant-${new Date().toISOString().slice(0, 10)}.sql`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export function AdminAssistantPanel({ userName, userRole }: AdminAssistantPanelProps) {
  const [draft, setDraft] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorState, setErrorState] = useState<AssistantErrorState>(null);
  const initialQuestion = 'Ventas del mes por vendedor';
  const [messages, setMessages] = useState<AdminAssistantMessage[]>([
    createAssistantMessage(
      `Hola ${userName}. Puedes preguntar por pedidos, clientes, cotizaciones o inventario. Este panel genera SQL de solo lectura para el rol ${userRole}.`
    ),
  ]);
  const [lastRequest, setLastRequest] = useState(() =>
    buildAdminAssistantRequest(initialQuestion, userRole)
  );
  const [lastResponsePreview, setLastResponsePreview] = useState<AdminAssistantChatResponse>(() =>
    createPendingAssistantResponse(initialQuestion)
  );

  const suggestions = getAdminAssistantSuggestions();
  const promptLimit = 500;

  const submitQuestion = async (question: string) => {
    const normalizedQuestion = question.trim();
    if (!normalizedQuestion || isSubmitting) return;

    const request = buildAdminAssistantRequest(normalizedQuestion, userRole);
    setMessages((currentMessages) => [...currentMessages, createUserMessage(normalizedQuestion)]);
    setLastRequest(request);
    setErrorState(null);
    setIsSubmitting(true);

    try {
      const response = await queryAdminAssistant(request);
      setLastResponsePreview(response);
      setMessages((currentMessages) => [
        ...currentMessages,
        createAssistantMessage(response.explanation),
      ]);
      setDraft('');
    } catch (error) {
      const apiError = error instanceof ApiRequestError ? error : null;
      const fallbackMessage =
        error instanceof Error ? error.message : 'No se pudo consultar el asistente.';

      setErrorState({
        message: fallbackMessage,
        code: apiError?.code,
        requestId: apiError?.requestId,
      });
      setLastResponsePreview(createPendingAssistantResponse(normalizedQuestion));
      setMessages((currentMessages) => [
        ...currentMessages,
        createAssistantMessage(
          apiError?.requestId
            ? `${fallbackMessage} RequestId: ${apiError.requestId}`
            : fallbackMessage
        ),
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitQuestion(draft);
  };

  return (
    <section className="admin-section admin-assistant-panel">
      <div className="admin-assistant-panel__header">
        <div>
          <span className="admin-assistant-panel__eyebrow">Asistente Admin</span>
          <h2>Consultas guiadas con IA</h2>
          <p className="muted">
            Conectado a <code>/api/ai/sql-assistant</code>. El panel consulta en
            lenguaje natural y devuelve SQL de solo lectura, explicación y
            supuestos operativos.
          </p>
        </div>
        <div className={`admin-assistant-panel__status ${isSubmitting ? 'is-busy' : ''}`}>
          <span className="admin-assistant-panel__status-dot" />
          {isSubmitting ? 'Generando SQL' : 'Conectado a API admin'}
        </div>
      </div>

      <div className="admin-assistant-layout">
        <div className="admin-assistant-chat">
          <div className="admin-assistant-suggestions">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                type="button"
                className="admin-assistant-suggestion"
                onClick={() => void submitQuestion(suggestion.prompt)}
                disabled={isSubmitting}
              >
                <span>{suggestion.icon}</span>
                {suggestion.label}
              </button>
            ))}
          </div>

          <div className="admin-assistant-thread">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`admin-assistant-message admin-assistant-message--${message.role}`}
              >
                <div className="admin-assistant-message__meta">
                  <strong>{message.role === 'assistant' ? 'Asistente' : 'Admin'}</strong>
                  <span>{new Date(message.timestamp).toLocaleTimeString('es-CL')}</span>
                </div>
                <p>{message.content}</p>
              </article>
            ))}
            {isSubmitting && (
              <article className="admin-assistant-message admin-assistant-message--assistant admin-assistant-message--loading">
                <div className="admin-assistant-message__meta">
                  <strong>Asistente</strong>
                  <span>Procesando</span>
                </div>
                <p>Consultando backend y generando SQL read-only...</p>
              </article>
            )}
          </div>

          <form className="admin-assistant-composer" onSubmit={handleSubmit}>
            <label htmlFor="admin-assistant-input">Consulta administrativa</label>
            <textarea
              id="admin-assistant-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value.slice(0, promptLimit))}
              placeholder="Pregunta por pedidos, clientes, cotizaciones, cartera o KPIs."
              rows={4}
              maxLength={promptLimit}
            />
            <div className="admin-assistant-composer__footer">
              <span className="admin-assistant-composer__counter">
                {draft.length}/{promptLimit}
              </span>
              <div className="admin-assistant-composer__actions">
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setDraft('')}
                  disabled={!draft.trim() || isSubmitting}
                >
                  Limpiar borrador
                </button>
                <button type="submit" className="btn btn--primary" disabled={!draft.trim() || isSubmitting}>
                  {isSubmitting ? 'Consultando...' : 'Consultar IA'}
                </button>
              </div>
            </div>
          </form>
        </div>

        <aside className="admin-assistant-sidepanel">
          {errorState && (
            <article className="admin-assistant-card admin-assistant-card--error">
              <h3>Error de consulta</h3>
              <p>{errorState.message}</p>
              <div className="admin-assistant-meta-list">
                <span>code: {errorState.code || 'N/A'}</span>
                <span>requestId: {errorState.requestId || 'N/A'}</span>
              </div>
            </article>
          )}

          <article className="admin-assistant-card">
            <h3>Capacidades previstas</h3>
            <ul>
              <li>Ventas por periodo, vendedor o cliente.</li>
              <li>Pedidos por estado, aprobación o atraso.</li>
              <li>Cartera comercial y clientes inactivos.</li>
              <li>Inventario, rotación y alertas operativas.</li>
            </ul>
          </article>

          <article className="admin-assistant-card">
            <h3>Payload enviado al backend</h3>
            <p>
              Contrato activo: <code>POST /api/ai/sql-assistant</code> con
              <code> question</code>, <code>schema</code>, <code>dialect</code> y
              <code> businessContext</code>.
            </p>
            <pre>{JSON.stringify(lastRequest, null, 2)}</pre>
          </article>

          <article className="admin-assistant-card">
            <div className="admin-assistant-card__header">
              <h3>Respuesta actual</h3>
              <button
                type="button"
                className="btn btn--secondary btn--small"
                onClick={() => exportAssistantSql(lastResponsePreview)}
                disabled={!lastResponsePreview.sql.trim()}
              >
                Exportar SQL
              </button>
            </div>
            <p>{lastResponsePreview.explanation}</p>
            <div className="admin-assistant-meta-list">
              <span>requestId: {lastResponsePreview.meta.requestId || 'N/A'}</span>
              <span>modelo: {lastResponsePreview.model}</span>
            </div>
            <pre>{lastResponsePreview.sql}</pre>
            <div className="admin-assistant-table">
              <div className="admin-assistant-table__head" style={{ gridTemplateColumns: '1fr' }}>
                <span>Supuestos del modelo</span>
              </div>
              {lastResponsePreview.assumptions.length > 0 ? (
                lastResponsePreview.assumptions.map((assumption, index) => (
                  <div
                    key={`assumption-${index}`}
                    className="admin-assistant-table__row"
                    style={{ gridTemplateColumns: '1fr' }}
                  >
                    <span>{assumption}</span>
                  </div>
                ))
              ) : (
                <div className="admin-assistant-table__empty">Sin supuestos declarados.</div>
              )}
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
