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
} from 'lucide-react';
import { useAuth } from '../features/auth/authStore';
import { authApi } from '../features/auth/authApi';
import type { User } from '../features/auth/types';
import { AdminAssistantPanel } from '../components/admin/AdminAssistantPanel';
import { ProductManagement } from '../components/admin/ProductManagement';
import { UserManagement } from '../components/admin/UserManagement';
import '../pages/admin/AdminDashboard.css';

const IMAGES = {
  equipment:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  robot:
    'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=800',
  quantum:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
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
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState<Array<Omit<User, 'password'>>>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);

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

  useEffect(() => {
    if (activeTab === 'users') {
      void loadUsers();
    }
  }, [activeTab, loadUsers]);

  if (!user) {
    return null;
  }

  if (user.role !== 'admin' && user.role !== 'root') {
    return <Navigate to="/portal-socios" replace />;
  }

  const navConfig = [
    { id: 'overview', label: 'Panel de Control', icon: LayoutDashboard, image: IMAGES.equipment },
    { id: 'assistant', label: 'Asistente IA', icon: Cpu, image: IMAGES.quantum },
    { id: 'products', label: 'Productos B2B', icon: Package, image: IMAGES.robot },
    { id: 'users', label: 'Usuarios', icon: Users, image: IMAGES.robot },
    { id: 'orders', label: 'Pedidos B2B', icon: ShoppingBag, image: IMAGES.equipment },
    { id: 'inventory', label: 'Bodega e Insumos', icon: Warehouse, image: IMAGES.quantum },
    { id: 'support', label: 'Soporte Tecnico', icon: Headphones, image: IMAGES.robot },
    { id: 'settings', label: 'Ajustes Sistema', icon: Settings, image: IMAGES.quantum },
  ];

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
          <button type="button" className="ops-icon-button" aria-label="Notificaciones">
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
                    <button type="button" className="ops-primary-button">
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
