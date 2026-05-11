import React, { useState } from 'react';
import { Users, BarChart3, Shield, Settings, Plus, Edit, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  status: string;
}

const AdminDashboardPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Juan P�rez', role: 'Vendedor', email: 'juan@protonlab.com', status: 'Activo' },
    { id: 2, name: 'Mar�a Garc�a', role: 'Bodega', email: 'maria@protonlab.com', status: 'Activo' },
    { id: 3, name: 'Carlos L�pez', role: 'Cliente', email: 'carlos@cliente.com', status: 'Inactivo' },
  ]);

  const stats = [
    { title: 'Total Usuarios', value: '156', icon: Users, color: 'text-blue-600' },
    { title: 'Ventas Mensuales', value: '\,230', icon: BarChart3, color: 'text-green-600' },
    { title: 'Productos en Stock', value: '1,247', icon: Shield, color: 'text-purple-600' },
    { title: 'Alertas de Seguridad', value: '3', icon: Settings, color: 'text-red-600' },
  ];

  const handleAddUser = () => {
    // L�gica para agregar usuario
    console.log('Agregar usuario');
  };

  const handleEditUser = (id: number) => {
    // L�gica para editar usuario
    console.log('Editar usuario', id);
  };

  const handleDeleteUser = (id: number) => {
    // L�gica para eliminar usuario
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Administraci�n - Proton Lab</h1>
          <p className="text-gray-600 mt-2">Gesti�n de usuarios, m�tricas y configuraci�n del sistema</p>
        </div>

        {/* Estad�sticas */}
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

        {/* Gesti�n de Usuarios */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Gesti�n de Usuarios</h2>
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
      </div>
    </div>
  );
};

export default AdminDashboardPage;
