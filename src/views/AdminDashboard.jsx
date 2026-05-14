import React, { useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  LayoutDashboard, 
  ShoppingBag, 
  Package,
  Warehouse,
  Headphones,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
  Globe,
  Database,
  Cpu
} from 'lucide-react';
import { useAuth } from '../features/auth/authStore';
import { AdminAssistantPanel } from '../components/admin/AdminAssistantPanel';
import '../pages/admin/AdminDashboard.css';

// Estilos de imagen para mantener la estética tecnológica
const IMAGES = {
  equipment: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  robot: "https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=800",
  quantum: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
};

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center ${collapsed ? 'justify-center' : 'gap-3 px-3'} py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
      active
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <Icon className="h-5 w-5 shrink-0" />
    {!collapsed && <span className="truncate">{label}</span>}
  </button>
);

const NavigationCard = ({ label, icon: Icon, image, onClick }) => (
  <button 
    onClick={onClick}
    className="relative group h-64 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
  >
    <img src={image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={label} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f273d] via-[#0f273d]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-8 left-8 flex items-center gap-4 text-white text-left">
      <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300">
        <Icon size={28} />
      </div>
      <div>
        <span className="block font-black text-2xl uppercase tracking-tighter leading-none">{label}</span>
        <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mt-1 block">Acceso al Módulo</span>
      </div>
    </div>
  </button>
);

const App = () => {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return null;
  }

  if (user.role !== 'admin' && user.role !== 'root') {
    return <Navigate to="/portal-socios" replace />;
  }

  const navConfig = [
    { id: 'overview', label: 'Panel de Control', icon: LayoutDashboard, image: IMAGES.equipment },
    { id: 'assistant', label: 'Asistente IA', icon: Cpu, image: IMAGES.quantum },
    { id: 'users', label: 'Usuarios', icon: Users, image: IMAGES.robot },
    { id: 'orders', label: 'Pedidos B2B', icon: ShoppingBag, image: IMAGES.equipment },
    { id: 'inventory', label: 'Bodega e Insumos', icon: Warehouse, image: IMAGES.quantum },
    { id: 'support', label: 'Soporte Técnico', icon: Headphones, image: IMAGES.robot },
    { id: 'settings', label: 'Ajustes Sistema', icon: Settings, image: IMAGES.quantum },
  ];

  const stats = [
    { title: 'Nodos Activos', value: '1,248', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Operaciones', value: '342', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Alertas Stock', value: '12', icon: Package, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 flex flex-col">
      {/* Header Superior */}
      <header className="bg-[#0f273d] text-white h-20 px-8 flex items-center justify-between sticky top-0 z-50 shadow-xl">
        <div className="flex items-center gap-12">
          <div className="bg-white p-2.5 rounded-xl rotate-[-1deg] shadow-lg">
            <h1 className="text-[#0f273d] font-black text-2xl leading-none tracking-tighter">Protonlab</h1>
            <p className="text-[7px] uppercase tracking-[0.3em] text-blue-600 font-black leading-none mt-1 text-center">ROBOTICS</p>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            <span className="h-4 w-[1px] bg-white/10"></span>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Database size={14} className="text-blue-400" />
              DB-Server: Online
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex bg-blue-500/10 px-4 py-2 rounded-xl items-center gap-3 border border-blue-400/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="font-black text-[10px] uppercase tracking-widest text-blue-100">{user.role} mode</span>
          </div>
          <Bell size={20} className="text-slate-400 cursor-pointer hover:text-white" />
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs border-2 border-white/20">
            AR
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Barra Lateral */}
        <aside className={`${isSidebarOpen ? 'w-72' : 'w-24'} bg-white border-r border-slate-200 p-6 transition-all duration-300 hidden md:flex flex-col`}>
          <div className="flex items-center justify-between mb-10 px-2">
            {isSidebarOpen && <h2 className="text-blue-600 font-black text-[10px] uppercase tracking-[0.25em]">Sistemas</h2>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-50 rounded-xl text-slate-400">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="space-y-2 flex-1">
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
            onClick={() => void logout()}
            className={`flex items-center ${isSidebarOpen ? 'gap-4 px-4' : 'justify-center'} py-4 text-sm font-black text-red-500 hover:bg-red-50 rounded-2xl transition-all`}
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>DESCONECTAR</span>}
          </button>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-[#0f273d] tracking-tighter uppercase leading-none">
                HOLA, <span className="text-blue-600 underline decoration-blue-100">{user.name}</span>
              </h1>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-4 flex items-center gap-2">
                <Globe size={14} className="text-blue-400" /> Núcleo de Control de Operaciones
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Último acceso</p>
              <p className="text-xs font-bold text-slate-700">10 Mayo, 21:50 PM</p>
            </div>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Grid de Estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border-b-8 border-b-blue-600 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all">
                    <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} w-fit mb-6`}>
                      <stat.icon size={28} />
                    </div>
                    <p className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] mb-1">{stat.title}</p>
                    <h3 className="text-4xl font-black text-[#0f273d] tracking-tighter">{stat.value}</h3>
                  </div>
                ))}
              </div>

              {/* Grid de Navegación Visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {navConfig.filter(n => n.id !== 'overview').map((item) => (
                  <NavigationCard 
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    image={item.image}
                    onClick={() => setActiveTab(item.id)}
                  />
                ))}
              </div>

              {/* Sección Inferior de Alertas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#0f273d] p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Estado del Sistema</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[92%]"></div>
                      </div>
                      <span className="font-black text-blue-400">92%</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
                      Ejecutar Diagnóstico
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                </div>

                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                  <h3 className="text-2xl font-black text-[#0f273d] uppercase tracking-tighter mb-6">Notificaciones</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-blue-500">
                      <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                        <Package size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Pedido #ORD-772 completado</p>
                        <p className="text-[10px] font-bold text-slate-400">HACE 5 MINUTOS</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-amber-500">
                      <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                        <Warehouse size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Stock bajo en Reactivos</p>
                        <p className="text-[10px] font-bold text-slate-400">HACE 2 HORAS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'assistant' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <AdminAssistantPanel userName={user.name} userRole={user.role} />
            </div>
          ) : (
            <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl min-h-[500px] flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
              <div className="p-10 bg-slate-50 rounded-[3rem] mb-8 border-4 border-dashed border-slate-200">
                {React.createElement(navConfig.find(n => n.id === activeTab)?.icon || Settings, { size: 64, className: "text-slate-300" })}
              </div>
              <h2 className="text-4xl font-black text-[#0f273d] uppercase tracking-tighter mb-4">
                Módulo {navConfig.find(n => n.id === activeTab)?.label}
              </h2>
              <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em] max-w-md">
                Estamos sincronizando los nodos de datos para este departamento. Estará disponible en la próxima actualización.
              </p>
              <button 
                onClick={() => setActiveTab('overview')}
                className="mt-10 text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] hover:tracking-[0.4em] transition-all"
              >
                ← Volver al Centro de Control
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
