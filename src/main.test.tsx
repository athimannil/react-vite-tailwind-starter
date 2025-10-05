import { describe, it, expect } from 'vitest';

describe('main.tsx', () => {
  it('imports without errors', async () => {
    // Create root element
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Test that main.tsx can be imported
    await expect(import('./main')).resolves.toBeDefined();

    // Clean up
    document.body.removeChild(rootElement);
  });

  it('throws when root element is missing', async () => {
    // Make sure no root element exists
    const existingRoot = document.getElementById('root');
    if (existingRoot) {
      document.body.removeChild(existingRoot);
    }

    // Should throw when trying to render without root
    await expect(async () => {
      // Force re-import by clearing module cache
      const mainPath = require.resolve('./main');
      delete require.cache[mainPath];
      await import('./main');
    }).rejects.toThrow();
  });

  it('successfully renders when root exists', async () => {
    // Create root element
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Should not throw
    await expect(import('./main')).resolves.toBeDefined();

    // Clean up
    document.body.removeChild(rootElement);
  });
});
