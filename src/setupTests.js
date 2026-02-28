import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Nettoie le DOM après chaque test pour repartir de zéro
afterEach(() => {
  cleanup();
});