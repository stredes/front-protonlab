import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Users,
  BarChart3,
  Settings,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Warehouse,
  Headphones,
  Bell,
  LogOut,
  Menu,
  X,
  Globe,
  Database,
  Cpu,
  FileText,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Download,
  RefreshCw,
  ShieldCheck,
  Server,
} from 'lucide-react';
import { useAuth } from '../features/auth/authStore';
import { authApi } from '../features/auth/authApi';
import type { User } from '../features/auth/types';
import type { Order } from '../features/auth/types';
import { AdminAssistantPanel } from '../components/admin/AdminAssistantPanel';
import { ProductManagement } from '../components/admin/ProductManagement';
import { UserManagement } from '../components/admin/UserManagement';
import { OrderApproval } from '../components/admin/OrderApproval';
import { OrderManagement } from '../components/admin/OrderManagement';
import { StockUploader } from '../components/admin/StockUploader';
import { WarehouseStock } from '../components/warehouse';
import { httpRequest, checkBackendConnection } from '../lib/httpClient';
import { API_BASE_URL } from '../config/env';
import { auth } from '../lib/firebase';
import { toast } from '../components/ui/Toast';
import { backendApi, Invoice, PurchaseOrder } from '../features/api/backendApiService';
import { isOperationalOrderStatus } from '../features/orders/orderFlow';
import { adminModules, AdminModuleId } from '../features/admin/adminModules';
import '../pages/admin/AdminDashboard.css';

const IMAGES = {
  equipment:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  robot:
    'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=800',
  quantum:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
};

const moduleIcons: Record<AdminModuleId, any> = {
  overview: LayoutDashboard,
  assistant: Cpu,
  products: Package,
  users: Users,
  orders: ShoppingBag,
  billing: FileText,
  inventory: Warehouse,
  support: Headphones,
  audit: BarChart3,
  diagnostics: Activity,
  security: ShieldCheck,
  notifications: Bell,
  settings: Settings,
};

interface SidebarItemProps {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
  collapsed: boolean;
}

function SidebarItem({ icon: Icon, label, active, onClick, collapsed }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`ops-sidebar__item ${active ? 'is-active' : ''} ${collapsed ? 'is-collapsed' : ''}`}
    >
      <Icon size={20} className="ops-sidebar__icon" />
      {!collapsed && <span className="ops-sidebar__label">{label}</span>}
    </button>
  );
}

interface NavigationCardProps {
  label: string;
  icon: any;
  image: string;
  onClick: () => void;
}

type SupportTicket = {
  id: string;
  ticketNumber: string;
  type: string;
  status: 'nuevo' | 'asignado' | 'en_progreso' | 'resuelto' | 'cerrado';
  priority: 'baja' | 'media' | 'alta';
  name: string;
  organization: string;
  email: string;
  equipment: string;
  comment: string;
  createdAt: string;
};

type BackendStatusPayload = {
  deployment?: {
    provider?: string;
    environment?: string;
  };
  backend?: {
    publicUrl?: string | null;
    correctlyDeployed?: boolean;
  };
  frontend?: {
    configured?: boolean;
    expectedOrigin?: string | null;
    reachable?: boolean;
  };
  integrations?: {
    firebaseConfigured?: boolean;
    firestoreReady?: boolean;
  };
  summary?: {
    level?: 'ok' | 'warning' | 'error';
    items?: string[];
  };
};

type SettingsNodeStatus = 'ok' | 'warning' | 'error' | 'checking';

type SettingsNode = {
  id: string;
  title: string;
  subtitle: string;
  status: SettingsNodeStatus;
  value: string;
  details: string[];
  icon: any;
};

function SupportManagement() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTickets = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await httpRequest<{ items: SupportTicket[] }>('/api/support/tickets?pageSize=200');
      setTickets(response.items || []);
    } catch (error) {
      console.error('Error loading support tickets:', error);
      setTickets([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadTickets();
  }, [loadTickets]);

  const updateTicket = async (ticketId: string, updates: Partial<Pick<SupportTicket, 'status' | 'priority'>>) => {
    try {
      await httpRequest(`/api/support/tickets/${ticketId}`, {
        method: 'PATCH',
        body: updates,
      });
      await loadTickets();
      toast.success('Ticket actualizado');
    } catch (error) {
      console.error('Error updating support ticket:', error);
      toast.error('No se pudo actualizar el ticket');
    }
  };

  if (isLoading) {
    return (
      <div className="admin-section">
        <p className="muted">Cargando tickets de soporte...</p>
      </div>
    );
  }

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Tickets de Soporte</h2>
          <p className="muted">{tickets.length} solicitudes registradas</p>
        </div>
        <button type="button" className="btn btn-secondary" onClick={() => void loadTickets()}>
          Recargar
        </button>
      </div>

      {tickets.length === 0 ? (
        <div className="empty-state">
          <p>No hay tickets registrados.</p>
        </div>
      ) : (
        <div className="order-management__table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Cliente</th>
                <th>Equipo</th>
                <th>Prioridad</th>
                <th>Estado</th>
                <th>Creado</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <strong>{ticket.ticketNumber}</strong>
                    <div className="muted">{ticket.type}</div>
                  </td>
                  <td>
                    {ticket.name}
                    <div className="muted">{ticket.organization || ticket.email}</div>
                  </td>
                  <td title={ticket.comment}>{ticket.equipment}</td>
                  <td>
                    <select
                      className="status-select"
                      value={ticket.priority}
                      onChange={(event) =>
                        void updateTicket(ticket.id, { priority: event.target.value as SupportTicket['priority'] })
                      }
                    >
                      <option value="baja">Baja</option>
                      <option value="media">Media</option>
                      <option value="alta">Alta</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="status-select"
                      value={ticket.status}
                      onChange={(event) =>
                        void updateTicket(ticket.id, { status: event.target.value as SupportTicket['status'] })
                      }
                    >
                      <option value="nuevo">Nuevo</option>
                      <option value="asignado">Asignado</option>
                      <option value="en_progreso">En progreso</option>
                      <option value="resuelto">Resuelto</option>
                      <option value="cerrado">Cerrado</option>
                    </select>
                  </td>
                  <td>{new Date(ticket.createdAt).toLocaleDateString('es-CL')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function AdminSettingsPanel() {
  const [nodes, setNodes] = useState<SettingsNode[]>([
    {
      id: 'api',
      title: 'API Backend',
      subtitle: 'Conexión HTTP y health check',
      status: 'checking',
      value: 'Pendiente',
      details: [`Base URL: ${API_BASE_URL || 'no configurada'}`],
      icon: Server,
    },
    {
      id: 'ready',
      title: 'Readiness',
      subtitle: 'Dependencias críticas',
      status: 'checking',
      value: 'Pendiente',
      details: ['Firestore y servicios backend sin validar'],
      icon: Activity,
    },
    {
      id: 'security',
      title: 'Seguridad y Rol',
      subtitle: 'Sesion, permisos y contexto',
      status: 'checking',
      value: 'Pendiente',
      details: ['Usuario actual sin evaluar'],
      icon: ShieldCheck,
    },
    {
      id: 'audit',
      title: 'Auditoría',
      subtitle: 'Exportación y trazabilidad CSV',
      status: 'checking',
      value: 'Pendiente',
      details: ['Reporte aún no verificado'],
      icon: FileText,
    },
  ]);
  const [statusSummary, setStatusSummary] = useState<BackendStatusPayload | null>(null);
  const [lastRunAt, setLastRunAt] = useState<string>('');
  const [isRunningDiagnostic, setIsRunningDiagnostic] = useState(false);

  const setNode = useCallback((nodeId: string, update: Partial<SettingsNode>) => {
    setNodes((current) =>
      current.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              ...update,
            }
          : node
      )
    );
  }, []);

  const runSystemDiagnostic = useCallback(async () => {
    setIsRunningDiagnostic(true);
    setNodes((current) => current.map((node) => ({ ...node, status: 'checking' as const })));

    try {
      const health = await httpRequest<{ service?: string; status?: string }>('/api/health');
      setNode('api', {
        status: health.status === 'ok' ? 'ok' : 'warning',
        value: health.status === 'ok' ? 'Operativo' : 'Respuesta parcial',
        details: [`Servicio: ${health.service || 'protonlab-backend'}`, `Base URL: ${API_BASE_URL}`],
      });
    } catch (error) {
      setNode('api', {
        status: 'error',
        value: 'Sin conexión',
        details: [error instanceof Error ? error.message : 'No se pudo conectar con /api/health'],
      });
    }

    try {
      const ready = await httpRequest<{ service?: string; status?: string; dependencies?: Record<string, string> }>('/api/ready');
      setNode('ready', {
        status: ready.status === 'ready' ? 'ok' : 'warning',
        value: ready.status === 'ready' ? 'Listo' : 'Pendiente',
        details: Object.entries(ready.dependencies || {}).map(([key, value]) => `${key}: ${value}`),
      });
    } catch (error) {
      setNode('ready', {
        status: 'error',
        value: 'Dependencias con error',
        details: [error instanceof Error ? error.message : 'No se pudo validar /api/ready'],
      });
    }

    try {
      const status = await httpRequest<BackendStatusPayload>('/api/status');
      setStatusSummary(status);
      setNode('security', {
        status: status.summary?.level === 'error' ? 'error' : status.summary?.level === 'warning' ? 'warning' : 'ok',
        value: status.integrations?.firebaseConfigured ? 'Firebase configurado' : 'Firebase incompleto',
        details: [
          `Proveedor: ${status.deployment?.provider || 'desconocido'}`,
          `Ambiente: ${status.deployment?.environment || 'desconocido'}`,
          `Frontend CORS: ${status.frontend?.configured ? 'configurado' : 'pendiente'}`,
          `Firestore: ${status.integrations?.firestoreReady ? 'operativo' : 'pendiente'}`,
        ],
      });
    } catch (error) {
      setNode('security', {
        status: 'warning',
        value: 'Estado no disponible',
        details: [error instanceof Error ? error.message : 'No se pudo leer /api/status'],
      });
    }

    try {
      const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
      const response = await fetch(`${API_BASE_URL}/api/audit/export`, {
        method: 'GET',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setNode('audit', {
        status: response.ok ? 'ok' : 'warning',
        value: response.ok ? 'Exportable' : `HTTP ${response.status}`,
        details: [
          `Endpoint: /api/audit/export`,
          `Content-Type: ${response.headers.get('content-type') || 'sin cabecera'}`,
          `Request ID: ${response.headers.get('x-request-id') || 'no informado'}`,
        ],
      });
    } catch (error) {
      setNode('audit', {
        status: 'error',
        value: 'No exportable',
        details: [error instanceof Error ? error.message : 'No se pudo verificar auditoría'],
      });
    }

    setLastRunAt(new Date().toLocaleString('es-CL'));
    setIsRunningDiagnostic(false);
  }, [setNode]);

  useEffect(() => {
    void runSystemDiagnostic();
  }, [runSystemDiagnostic]);

  const handleBackendCheck = async () => {
    const isConnected = await checkBackendConnection();
    if (isConnected) {
      toast.success('Backend operativo');
    } else {
      toast.error('Backend no disponible');
    }
  };

  const handleDownloadAudit = async () => {
    try {
      const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
      const response = await fetch(`${API_BASE_URL}/api/audit/export`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = `protonlab-auditoria-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(downloadUrl);
      toast.success('Auditoría descargada');
    } catch (error) {
      console.error('Error downloading audit report:', error);
      toast.error('No se pudo descargar la auditoría');
    }
  };

  return (
    <div className="admin-section system-settings-node">
      <div className="system-settings-node__header">
        <div>
          <span className="system-settings-node__eyebrow">Nodo operativo</span>
          <h2>Ajustes del Sistema</h2>
          <p className="muted">Diagnóstico, seguridad, trazabilidad y configuración del ERP.</p>
        </div>
        <div className="system-settings-node__actions">
          <button
            type="button"
            className="ops-primary-button"
            onClick={() => void runSystemDiagnostic()}
            disabled={isRunningDiagnostic}
          >
            <RefreshCw size={16} />
            {isRunningDiagnostic ? 'Diagnosticando' : 'Ejecutar diagnóstico'}
          </button>
          <button type="button" className="system-settings-node__secondary" onClick={handleBackendCheck}>
            <Database size={16} />
            Verificar backend
          </button>
          <button type="button" className="system-settings-node__secondary" onClick={handleDownloadAudit}>
            <Download size={16} />
            Descargar auditoría
          </button>
        </div>
      </div>

      <div className="system-settings-node__command">
        <div>
          <span>Base API</span>
          <strong>{API_BASE_URL || 'No configurada'}</strong>
        </div>
        <div>
          <span>Frontend</span>
          <strong>{window.location.origin}</strong>
        </div>
        <div>
          <span>Último diagnóstico</span>
          <strong>{lastRunAt || 'En ejecución'}</strong>
        </div>
      </div>

      <div className="system-settings-node__grid">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <article key={node.id} className={`system-node-card system-node-card--${node.status}`}>
              <div className="system-node-card__top">
                <div className="system-node-card__icon">
                  <Icon size={22} />
                </div>
                <span className="system-node-card__status">
                  {node.status === 'ok' && <CheckCircle2 size={15} />}
                  {node.status === 'warning' && <AlertTriangle size={15} />}
                  {node.status === 'error' && <AlertTriangle size={15} />}
                  {node.status === 'checking' && <RefreshCw size={15} />}
                  {node.status}
                </span>
              </div>
              <h3>{node.title}</h3>
              <p>{node.subtitle}</p>
              <strong>{node.value}</strong>
              <ul>
                {node.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {statusSummary && (
        <div className={`system-settings-node__summary system-settings-node__summary--${statusSummary.summary?.level || 'warning'}`}>
          <div>
            <span>Resumen backend</span>
            <strong>{statusSummary.summary?.level || 'warning'}</strong>
          </div>
          <ul>
            {(statusSummary.summary?.items || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="system-settings-node__matrix">
        <div>
          <span>Rol activo</span>
          <strong>{auth.currentUser?.email || 'Sesión local'}</strong>
        </div>
        <div>
          <span>Auditoría</span>
          <strong>Cotizaciones, pedidos, OC, facturas y soporte</strong>
        </div>
        <div>
          <span>Endpoints críticos</span>
          <strong>/health · /ready · /status · /audit/export</strong>
        </div>
      </div>
    </div>
  );
}

function BillingManagement({ userRole }: { userRole: User['role'] }) {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [buyerReference, setBuyerReference] = useState('');
  const [selectedPurchaseOrderId, setSelectedPurchaseOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadBilling = useCallback(async () => {
    setIsLoading(true);
    try {
      const [ordersResponse, purchaseOrdersResponse, invoicesResponse] = await Promise.all([
        backendApi.listOrders({ pageSize: 200 }),
        backendApi.listPurchaseOrders({ pageSize: 200 }),
        backendApi.listInvoices({ pageSize: 200 }),
      ]);
      setOrders((ordersResponse.data.items || []).filter((order) => isOperationalOrderStatus(order.status)));
      setPurchaseOrders(purchaseOrdersResponse.data.items || []);
      setInvoices(invoicesResponse.data.items || []);
    } catch (error) {
      console.error('Error loading billing data:', error);
      toast.error('No se pudo cargar facturación');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadBilling();
  }, [loadBilling]);

  const createPurchaseOrder = async () => {
    if (!selectedOrderId) {
      toast.error('Selecciona un pedido operativo');
      return;
    }
    try {
      const response = await backendApi.createPurchaseOrder(
        {
          sourceOrderId: selectedOrderId,
          buyerReference: buyerReference || undefined,
          requestedBy: 'Administración ProtonLab',
          requestedByRole: userRole,
        },
        userRole
      );
      setSelectedPurchaseOrderId(response.data.id);
      setBuyerReference('');
      await loadBilling();
      toast.success('Orden de compra creada');
    } catch (error) {
      console.error('Error creating purchase order:', error);
      toast.error('No se pudo crear la orden de compra');
    }
  };

  const approvePurchaseOrder = async (purchaseOrderId: string) => {
    try {
      await backendApi.approvePurchaseOrder(
        purchaseOrderId,
        { approved: true, notes: 'Aprobación administrativa desde ERP' },
        userRole
      );
      await loadBilling();
      toast.success('Orden de compra aprobada');
    } catch (error) {
      console.error('Error approving purchase order:', error);
      toast.error('No se pudo aprobar la orden de compra');
    }
  };

  const createInvoice = async () => {
    const purchaseOrder = purchaseOrders.find((item) => item.id === selectedPurchaseOrderId);
    if (!purchaseOrder) {
      toast.error('Selecciona una orden de compra');
      return;
    }
    try {
      await backendApi.createInvoice(
        {
          sourceOrderId: purchaseOrder.sourceOrderId,
          purchaseOrderId: purchaseOrder.id,
          billingReference: purchaseOrder.buyerReference,
          role: userRole,
        },
        userRole
      );
      await loadBilling();
      toast.success('Factura emitida');
    } catch (error) {
      console.error('Error creating invoice:', error);
      toast.error('No se pudo emitir la factura');
    }
  };

  if (isLoading) {
    return (
      <div className="admin-section">
        <p className="muted">Cargando órdenes de compra y facturas...</p>
      </div>
    );
  }

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Órdenes de Compra y Facturación</h2>
          <p className="muted">Creación de OC, aprobación por rol y emisión de facturas.</p>
        </div>
        <button type="button" className="btn btn-secondary" onClick={() => void loadBilling()}>
          Recargar
        </button>
      </div>

      <div className="ops-detail-grid">
        <section className="ops-system-card">
          <div className="ops-system-card__content">
            <h3>Nueva orden de compra</h3>
            <select className="status-select" value={selectedOrderId} onChange={(event) => setSelectedOrderId(event.target.value)}>
              <option value="">Seleccionar pedido</option>
              {orders.map((order) => (
                <option key={order.id} value={order.id}>
                  {order.orderNumber} - {order.customerName}
                </option>
              ))}
            </select>
            <input
              className="modal-input"
              value={buyerReference}
              onChange={(event) => setBuyerReference(event.target.value)}
              placeholder="Referencia OC cliente"
            />
            <button type="button" className="ops-primary-button" onClick={() => void createPurchaseOrder()}>
              Crear OC
            </button>
          </div>
        </section>

        <section className="ops-system-card">
          <div className="ops-system-card__content">
            <h3>Emitir factura</h3>
            <select
              className="status-select"
              value={selectedPurchaseOrderId}
              onChange={(event) => setSelectedPurchaseOrderId(event.target.value)}
            >
              <option value="">Seleccionar OC aprobada</option>
              {purchaseOrders
                .filter((purchaseOrder) => purchaseOrder.status === 'aprobada')
                .map((purchaseOrder) => (
                  <option key={purchaseOrder.id} value={purchaseOrder.id}>
                    {purchaseOrder.purchaseOrderNumber} - {purchaseOrder.customerName}
                  </option>
                ))}
            </select>
            <button type="button" className="ops-primary-button" onClick={() => void createInvoice()}>
              Emitir factura
            </button>
          </div>
        </section>
      </div>

      <div className="order-management__table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>OC</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Aprobaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrders.map((purchaseOrder) => (
              <tr key={purchaseOrder.id}>
                <td>
                  <strong>{purchaseOrder.purchaseOrderNumber}</strong>
                  <div className="muted">{purchaseOrder.buyerReference || purchaseOrder.sourceOrderId}</div>
                </td>
                <td>{purchaseOrder.customerName}</td>
                <td>${purchaseOrder.total.toLocaleString('es-CL')}</td>
                <td>{purchaseOrder.status}</td>
                <td>{purchaseOrder.approvals.length}</td>
                <td>
                  {purchaseOrder.status === 'pendiente_aprobacion' && (
                    <button type="button" className="btn btn-primary" onClick={() => void approvePurchaseOrder(purchaseOrder.id)}>
                      Aprobar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="order-management__table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Factura</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Pago</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <strong>{invoice.invoiceNumber}</strong>
                  <div className="muted">{invoice.billingReference || invoice.sourceOrderId}</div>
                </td>
                <td>{invoice.customerName}</td>
                <td>${invoice.total.toLocaleString('es-CL')}</td>
                <td>{invoice.status}</td>
                <td>{invoice.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AuditModule() {
  const [auditStatus, setAuditStatus] = useState<'idle' | 'checking' | 'ready' | 'error'>('idle');
  const [auditDetails, setAuditDetails] = useState<string[]>([
    'Cotizaciones',
    'Pedidos',
    'Órdenes de compra',
    'Facturas',
    'Soporte',
  ]);

  const verifyAudit = async () => {
    setAuditStatus('checking');
    try {
      const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
      const response = await fetch(`${API_BASE_URL}/api/audit/export`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const text = await response.text();
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      setAuditDetails([
        `Archivo CSV disponible (${text.split('\n').filter(Boolean).length} filas)`,
        `Content-Type: ${response.headers.get('content-type') || 'no informado'}`,
        `Request ID: ${response.headers.get('x-request-id') || 'no informado'}`,
      ]);
      setAuditStatus('ready');
    } catch (error) {
      setAuditDetails([error instanceof Error ? error.message : 'No se pudo validar auditoría']);
      setAuditStatus('error');
    }
  };

  const downloadAudit = async () => {
    try {
      const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
      const response = await fetch(`${API_BASE_URL}/api/audit/export`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = `protonlab-auditoria-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(downloadUrl);
      toast.success('Auditoría descargada');
    } catch (error) {
      console.error('Error downloading audit:', error);
      toast.error('No se pudo descargar auditoría');
    }
  };

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Auditoría Operativa</h2>
          <p className="muted">Reporte CSV consolidado para trazabilidad y revisión de operaciones.</p>
        </div>
        <div className="root-tools-actions">
          <button type="button" className="btn btn-secondary" onClick={() => void verifyAudit()}>
            {auditStatus === 'checking' ? 'Verificando...' : 'Verificar reporte'}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => void downloadAudit()}>
            Descargar CSV
          </button>
        </div>
      </div>
      <div className="root-tools-grid">
        {['Cotizaciones', 'Pedidos', 'Órdenes de compra', 'Facturas', 'Tickets de soporte'].map((scope) => (
          <article className="root-tool-card" key={scope}>
            <h3>{scope}</h3>
            <p>Incluido en el reporte de auditoría y trazabilidad.</p>
          </article>
        ))}
      </div>
      <div className={`system-settings-node__summary system-settings-node__summary--${auditStatus === 'error' ? 'error' : auditStatus === 'ready' ? 'ok' : 'warning'}`}>
        <div>
          <span>Estado</span>
          <strong>{auditStatus}</strong>
        </div>
        <ul>
          {auditDetails.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DiagnosticsModule() {
  const [status, setStatus] = useState<BackendStatusPayload | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const runDiagnostics = async () => {
    setIsChecking(true);
    try {
      const result = await httpRequest<BackendStatusPayload>('/api/status');
      setStatus(result);
      toast.success('Diagnóstico actualizado');
    } catch (error) {
      console.error('Error running diagnostics:', error);
      toast.error('No se pudo ejecutar diagnóstico');
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    void runDiagnostics();
  }, []);

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Diagnóstico Técnico</h2>
          <p className="muted">Estado de despliegue, frontend, backend e integraciones.</p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => void runDiagnostics()}>
          {isChecking ? 'Diagnosticando...' : 'Ejecutar diagnóstico'}
        </button>
      </div>
      <div className="root-tools-grid">
        <article className="root-tool-card">
          <h3>Proveedor</h3>
          <p>{status?.deployment?.provider || 'Pendiente'}</p>
        </article>
        <article className="root-tool-card">
          <h3>Ambiente</h3>
          <p>{status?.deployment?.environment || 'Pendiente'}</p>
        </article>
        <article className="root-tool-card">
          <h3>Frontend CORS</h3>
          <p>{status?.frontend?.configured ? 'Configurado' : 'Pendiente'}</p>
        </article>
        <article className="root-tool-card">
          <h3>Firestore</h3>
          <p>{status?.integrations?.firestoreReady ? 'Operativo' : 'Pendiente'}</p>
        </article>
      </div>
      {status && (
        <div className={`system-settings-node__summary system-settings-node__summary--${status.summary?.level || 'warning'}`}>
          <div>
            <span>Resumen</span>
            <strong>{status.summary?.level || 'warning'}</strong>
          </div>
          <ul>
            {(status.summary?.items || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SecurityModule({ user }: { user: User }) {
  const rolePolicies = [
    ['root', 'Usuarios críticos, seguridad, productos, categorías, auditoría total'],
    ['admin', 'Operación ERP, pedidos, OC, facturación, soporte y bodega'],
    ['vendedor', 'Cotizaciones, cartera, clientes y seguimiento comercial'],
    ['bodega', 'Preparación, despacho y stock físico'],
    ['socio', 'Portal, cotizaciones, pedidos, soporte y contactos'],
  ];

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Seguridad y Roles</h2>
          <p className="muted">Matriz operativa de permisos y contexto de sesión.</p>
        </div>
      </div>
      <div className="root-tools-grid">
        <article className="root-tool-card">
          <h3>Usuario activo</h3>
          <p>{user.email}</p>
        </article>
        <article className="root-tool-card">
          <h3>Rol activo</h3>
          <p>{user.role}</p>
        </article>
        <article className="root-tool-card">
          <h3>Aprobación OC</h3>
          <p>Solo admin y root pueden aprobar órdenes de compra.</p>
        </article>
        <article className="root-tool-card">
          <h3>Rutas protegidas</h3>
          <p>El acceso se valida mediante Firebase Auth y ProtectedRoute.</p>
        </article>
      </div>
      <div className="order-management__table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Rol</th>
              <th>Permiso operativo</th>
            </tr>
          </thead>
          <tbody>
            {rolePolicies.map(([role, policy]) => (
              <tr key={role}>
                <td><strong>{role}</strong></td>
                <td>{policy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NotificationsModule({ orders }: { orders: Order[] }) {
  const notifications = [
    ...orders.slice(0, 5).map((order) => ({
      id: order.id,
      title: `${order.orderNumber} - ${order.customerName}`,
      detail: `Estado actual: ${order.status}`,
      tone: order.status === 'cancelado' || order.status === 'rechazado' ? 'amber' : 'blue',
    })),
    {
      id: 'audit-ready',
      title: 'Auditoría disponible',
      detail: 'El reporte CSV consolida cotizaciones, pedidos, OC, facturas y soporte.',
      tone: 'blue',
    },
  ];

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Centro de Notificaciones</h2>
          <p className="muted">Eventos operativos recientes y alertas del ERP.</p>
        </div>
      </div>
      <div className="ops-notification-list">
        {notifications.map((notification) => (
          <article
            key={notification.id}
            className={`ops-notification ${notification.tone === 'amber' ? 'ops-notification--amber' : 'ops-notification--blue'}`}
          >
            <div className="ops-notification__icon">
              <Bell size={20} />
            </div>
            <div>
              <p>{notification.title}</p>
              <span>{notification.detail}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function NavigationCard({ label, icon: Icon, image, onClick }: NavigationCardProps) {
  return (
    <button onClick={onClick} className="ops-nav-card">
      <img src={image} className="ops-nav-card__image" alt={label} />
      <div className="ops-nav-card__overlay" />
      <div className="ops-nav-card__content">
        <div className="ops-nav-card__icon">
          <Icon size={28} />
        </div>
        <div>
          <span className="ops-nav-card__title">{label}</span>
          <span className="ops-nav-card__subtitle">Acceso al Modulo</span>
        </div>
      </div>
    </button>
  );
}

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminModuleId>('overview');
  const [users, setUsers] = useState<Array<Omit<User, 'password'>>>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isOrdersLoading, setIsOrdersLoading] = useState(false);

  const loadUsers = useCallback(async () => {
    if (!user || (user.role !== 'admin' && user.role !== 'root')) {
      return;
    }

    setIsUsersLoading(true);
    try {
      setUsers(await authApi.getAllUsers());
    } catch (error) {
      console.error('Error loading admin users:', error);
      setUsers([]);
    } finally {
      setIsUsersLoading(false);
    }
  }, [user]);

  const loadOrders = useCallback(async () => {
    if (!user || (user.role !== 'admin' && user.role !== 'root')) {
      return;
    }

    setIsOrdersLoading(true);
    try {
      setOrders(await authApi.getOrders());
    } catch (error) {
      console.error('Error loading admin orders:', error);
      setOrders([]);
    } finally {
      setIsOrdersLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (activeTab === 'users') {
      void loadUsers();
    }
  }, [activeTab, loadUsers]);

  useEffect(() => {
    if (activeTab === 'orders' || activeTab === 'notifications') {
      void loadOrders();
    }
  }, [activeTab, loadOrders]);

  if (!user) {
    return null;
  }

  if (user.role !== 'admin' && user.role !== 'root') {
    return <Navigate to="/portal-socios" replace />;
  }

  const navConfig = adminModules.map((module) => ({
    ...module,
    icon: moduleIcons[module.id],
    image: IMAGES[module.imageKey],
  }));

  const stats = [
    { title: 'Nodos Activos', value: '1,248', icon: Cpu, tone: 'blue' },
    { title: 'Operaciones', value: '342', icon: BarChart3, tone: 'green' },
    { title: 'Alertas Stock', value: '12', icon: Package, tone: 'amber' },
  ];

  const activeNavItem = navConfig.find((item) => item.id === activeTab);

  return (
    <div className="ops-dashboard">
      <header className="ops-topbar">
        <div className="ops-topbar__brand-group">
          <div className="ops-brand-mark">
            <h1>Protonlab</h1>
            <p>Hardware and Robotics</p>
          </div>
          <div className="ops-topbar__status">
            <span className="ops-topbar__divider" />
            <div className="ops-topbar__status-chip">
              <Database size={14} />
              <span>DB-Server: Online</span>
            </div>
          </div>
        </div>

        <div className="ops-topbar__actions">
          <div className="ops-topbar__mode">
            <span className="ops-topbar__mode-dot" />
            <span>{user.role} mode</span>
          </div>
          <button
            type="button"
            className="ops-icon-button"
            aria-label="Notificaciones"
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={20} />
          </button>
          <div className="ops-avatar">AR</div>
        </div>
      </header>

      <div className="ops-workspace">
        <aside className={`ops-sidebar ${isSidebarOpen ? '' : 'is-collapsed'}`}>
          <div className="ops-sidebar__header">
            {isSidebarOpen && <h2>Sistemas</h2>}
            <button
              type="button"
              onClick={() => setIsSidebarOpen((current) => !current)}
              className="ops-icon-button"
              aria-label={isSidebarOpen ? 'Contraer menu' : 'Expandir menu'}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="ops-sidebar__nav">
            {navConfig.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
                collapsed={!isSidebarOpen}
              />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => void logout()}
            className={`ops-sidebar__logout ${isSidebarOpen ? '' : 'is-collapsed'}`}
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>Desconectar</span>}
          </button>
        </aside>

        <main className="ops-main">
          <div className="ops-hero">
            <div>
              <h1 className="ops-hero__title">
                Hola, <span>{user.name}</span>
              </h1>
              <p className="ops-hero__eyebrow">
                <Globe size={14} />
                Nucleo de control de operaciones
              </p>
            </div>
            <div className="ops-last-access">
              <p>Ultimo acceso</p>
              <strong>10 Mayo, 21:50 PM</strong>
            </div>
          </div>

          {activeTab === 'overview' ? (
            <div className="ops-overview">
              <div className="ops-stats-grid">
                {stats.map((stat) => (
                  <article key={stat.title} className={`ops-stat-card ops-stat-card--${stat.tone}`}>
                    <div className="ops-stat-card__icon">
                      <stat.icon size={28} />
                    </div>
                    <p className="ops-stat-card__label">{stat.title}</p>
                    <h3 className="ops-stat-card__value">{stat.value}</h3>
                  </article>
                ))}
              </div>

              <div className="ops-nav-grid">
                {navConfig
                  .filter((item) => item.id !== 'overview')
                  .map((item) => (
                    <NavigationCard
                      key={item.id}
                      label={item.label}
                      icon={item.icon}
                      image={item.image}
                      onClick={() => setActiveTab(item.id)}
                    />
                  ))}
              </div>

              <div className="ops-detail-grid">
                <section className="ops-system-card">
                  <div className="ops-system-card__content">
                    <h3>Estado del Sistema</h3>
                    <div className="ops-system-card__meter">
                      <div className="ops-system-card__meter-track">
                        <div className="ops-system-card__meter-fill" />
                      </div>
                      <span>92%</span>
                    </div>
                    <button type="button" className="ops-primary-button" onClick={() => setActiveTab('diagnostics')}>
                      Ejecutar Diagnostico
                    </button>
                  </div>
                  <div className="ops-system-card__glow" />
                </section>

                <section className="ops-notifications-card">
                  <h3>Notificaciones</h3>
                  <div className="ops-notification-list">
                    <article className="ops-notification ops-notification--blue">
                      <div className="ops-notification__icon">
                        <Package size={20} />
                      </div>
                      <div>
                        <p>Pedido #ORD-772 completado</p>
                        <span>Hace 5 minutos</span>
                      </div>
                    </article>
                    <article className="ops-notification ops-notification--amber">
                      <div className="ops-notification__icon">
                        <Warehouse size={20} />
                      </div>
                      <div>
                        <p>Stock bajo en reactivos</p>
                        <span>Hace 2 horas</span>
                      </div>
                    </article>
                  </div>
                </section>
              </div>
            </div>
          ) : activeTab === 'assistant' ? (
            <div className="ops-panel-shell">
              <AdminAssistantPanel userName={user.name} userRole={user.role} />
            </div>
          ) : activeTab === 'products' ? (
            <div className="ops-panel-shell">
              <div className="admin-section">
                <ProductManagement />
              </div>
            </div>
          ) : activeTab === 'users' ? (
            <div className="ops-panel-shell">
              {isUsersLoading ? (
                <div className="admin-section">
                  <p className="muted">Cargando usuarios desde Firebase Auth...</p>
                </div>
              ) : (
                <UserManagement
                  users={users}
                  currentUser={user}
                  onUsersChange={() => void loadUsers()}
                />
              )}
            </div>
          ) : activeTab === 'orders' ? (
            <div className="ops-panel-shell">
              {isOrdersLoading ? (
                <div className="admin-section">
                  <p className="muted">Cargando pedidos y cotizaciones...</p>
                </div>
              ) : (
                <div className="admin-section">
                  <OrderApproval orders={orders} onOrderUpdate={() => void loadOrders()} />
                  <OrderManagement orders={orders} onOrderUpdate={() => void loadOrders()} />
                </div>
              )}
            </div>
          ) : activeTab === 'billing' ? (
            <div className="ops-panel-shell">
              <BillingManagement userRole={user.role} />
            </div>
          ) : activeTab === 'inventory' ? (
            <div className="ops-panel-shell">
              <div className="admin-section">
                <StockUploader onUploadComplete={() => undefined} />
                <WarehouseStock />
              </div>
            </div>
          ) : activeTab === 'support' ? (
            <div className="ops-panel-shell">
              <SupportManagement />
            </div>
          ) : activeTab === 'audit' ? (
            <div className="ops-panel-shell">
              <AuditModule />
            </div>
          ) : activeTab === 'diagnostics' ? (
            <div className="ops-panel-shell">
              <DiagnosticsModule />
            </div>
          ) : activeTab === 'security' ? (
            <div className="ops-panel-shell">
              <SecurityModule user={user} />
            </div>
          ) : activeTab === 'notifications' ? (
            <div className="ops-panel-shell">
              {isOrdersLoading ? (
                <div className="admin-section">
                  <p className="muted">Cargando notificaciones operativas...</p>
                </div>
              ) : (
                <NotificationsModule orders={orders} />
              )}
            </div>
          ) : activeTab === 'settings' ? (
            <div className="ops-panel-shell">
              <AdminSettingsPanel />
            </div>
          ) : (
            <div className="ops-placeholder">
              <div className="ops-placeholder__icon">
                {React.createElement(activeNavItem?.icon || Settings, {
                  size: 64,
                })}
              </div>
              <h2>Modulo {activeNavItem?.label}</h2>
              <p>
                Estamos sincronizando los nodos de datos para este departamento. Estara disponible
                en la proxima actualizacion.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className="ops-back-link"
              >
                Volver al centro de control
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
