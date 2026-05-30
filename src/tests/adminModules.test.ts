import { describe, expect, it } from 'vitest';
import { adminModules, requiredAdminModuleIds } from '../features/admin/adminModules';

describe('admin module registry', () => {
  it('declares every operational ERP module as implemented', () => {
    const moduleIds = adminModules.map((module) => module.id);

    expect(moduleIds).toEqual(expect.arrayContaining(requiredAdminModuleIds));
    expect(adminModules.every((module) => module.implemented)).toBe(true);
  });

  it('does not leave placeholder modules in the admin navigation', () => {
    expect(adminModules).not.toContainEqual(
      expect.objectContaining({
        implemented: false,
      })
    );
  });
});
