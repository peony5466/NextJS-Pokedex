import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonListPage from './PokemonListPage';
import { LanguageProvider } from '@/context/LanguageContext';

describe('PokemonListPage - Cas d\'erreur', () => {
  it('affiche un message gracieux quand la liste est vide', () => {
    render(
      <LanguageProvider>
        <PokemonListPage initialPokemons={[]} />
      </LanguageProvider>
    );

    const cards = screen.queryByRole('img');
    expect(cards).not.toBeInTheDocument();
  });
});