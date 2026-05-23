import React, { useState } from 'react';
import { Users, BarChart3, Shield, Settings, Plus, Edit, Trash2, Package, Tag } from 'lucide-react';
import { ProductManagement } from '../../components/admin/ProductManagement';
import { CategoryManagement } from '../../components/admin/CategoryManagement';

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  status: string;
}

const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'products' | 'categories' | 'stats'>('users');
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Juan Pérez', role: 'Vendedor', email: 'juan@protonlab.com', status: 'Activo' },
    { id: 2, name: 'María García', role: 'Bodega', email: 'maria@protonlab.com', status: 'Activo' },
    { id: 3, name: 'Carlos López', role: 'Cliente', email: 'carlos@cliente.com', status: 'Inactivo' },
  ]);

  const stats = [
    { title: 'Total Usuarios', value: '156', icon: Users, color: 'text-blue-600' },
    { title: 'Ventas Mensuales', value: '\,230', icon: BarChart3, color: 'text-green-600' },
    { title: 'Productos en Stock', value: '1,247', icon: Shield, color: 'text-purple-600' },
    { title: 'Alertas de Seguridad', value: '3', icon: Settings, color: 'text-red-600' },
  ];

  const handleAddUser = () => {
    // Lógica para agregar usuario
    console.log('Agregar usuario');
  };

  const handleEditUser = (id: number) => {
    // Lógica para editar usuario
    console.log('Editar usuario', id);
  };

  const handleDeleteUser = (id: number) => {
    // Lógica para eliminar usuario
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Administración - Proton Lab</h1>
          <p className="text-gray-600 mt-2">Gestión de usuarios, métricas y configuración del sistema</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg shadow-sm p-1 mb-8 w-fit border">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
              activeTab === 'users' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="h-4 w-4" />
            Usuarios
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
              activeTab === 'products' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Package className="h-4 w-4" />
            Productos (B2B)
          </button>
          <button
            id="admin-tab-categories"
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
              activeTab === 'categories' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Tag className="h-4 w-4" />
            Categorías
          </button>
          <button
            id="admin-tab-stats"
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
              activeTab === 'stats' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            Métricas
          </button>
        </div>

        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Gestión de Usuarios</h2>
                <button
                  onClick={handleAddUser}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Usuario
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          user.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleEditUser(user.id)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <ProductManagement />
        )}

        {activeTab === 'categories' && (
          <CategoryManagement />
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
