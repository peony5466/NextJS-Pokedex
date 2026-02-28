import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Composant Logo', () => {
  it('affiche une image avec le texte alternatif "Pokedex Logo"', () => {
    render(<Logo />);
    const logoImg = screen.getByAltText(/Pokedex Logo/i);
    expect(logoImg).toBeInTheDocument();
  });
});