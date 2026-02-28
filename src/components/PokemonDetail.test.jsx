import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonDetail from './PokemonDetail';
import { LanguageProvider } from '../context/LanguageContext';

const mockPokemon = {
  id: 1,
  names: { fr: 'Bulbizarre', en: 'Bulbasaur' },
  height: 7,
  weight: 69, 
  types: ['grass'],
  moves: ['Tackle']
};

describe('PokemonDetail', () => {
  it('affiche les calculs corrects de taille et poids (division par 10)', () => {
    render(
      <LanguageProvider>
        <PokemonDetail pokemon={mockPokemon} />
      </LanguageProvider>
    );

    expect(screen.getByText(/0.7 m/i)).toBeInTheDocument();
    expect(screen.getByText(/6.9 kg/i)).toBeInTheDocument();
  });

  it('affiche la liste des mouvements après le clic sur le bouton', async () => {
    render(
      <LanguageProvider>
        <PokemonDetail pokemon={mockPokemon} />
      </LanguageProvider>
    );

    const button = screen.getByText(/Voir les mouvements/i);
    fireEvent.click(button);

    expect(screen.getByText(/Tackle/i)).toBeInTheDocument();
  });
});