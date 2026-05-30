export const requiredAdminModuleIds = [
  'overview',
  'assistant',
  'products',
  'users',
  'orders',
  'billing',
  'inventory',
  'support',
  'audit',
  'diagnostics',
  'security',
  'notifications',
  'settings',
] as const;

export type AdminModuleId = (typeof requiredAdminModuleIds)[number];

export type AdminModuleDefinition = {
  id: AdminModuleId;
  label: string;
  imageKey: 'equipment' | 'robot' | 'quantum';
  implemented: boolean;
};

export const adminModules: AdminModuleDefinition[] = [
  { id: 'overview', label: 'Panel de Control', imageKey: 'equipment', implemented: true },
  { id: 'assistant', label: 'Asistente IA', imageKey: 'quantum', implemented: true },
  { id: 'products', label: 'Productos B2B', imageKey: 'robot', implemented: true },
  { id: 'users', label: 'Usuarios', imageKey: 'robot', implemented: true },
  { id: 'orders', label: 'Pedidos B2B', imageKey: 'equipment', implemented: true },
  { id: 'billing', label: 'OC y Facturación', imageKey: 'equipment', implemented: true },
  { id: 'inventory', label: 'Bodega e Insumos', imageKey: 'quantum', implemented: true },
  { id: 'support', label: 'Soporte Técnico', imageKey: 'robot', implemented: true },
  { id: 'audit', label: 'Auditoría', imageKey: 'quantum', implemented: true },
  { id: 'diagnostics', label: 'Diagnóstico', imageKey: 'equipment', implemented: true },
  { id: 'security', label: 'Seguridad', imageKey: 'robot', implemented: true },
  { id: 'notifications', label: 'Notificaciones', imageKey: 'equipment', implemented: true },
  { id: 'settings', label: 'Ajustes Sistema', imageKey: 'quantum', implemented: true },
];
