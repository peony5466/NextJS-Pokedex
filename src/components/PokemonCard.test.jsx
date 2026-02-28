import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';
import { LanguageProvider } from '../context/LanguageContext';

const mockPokemon = {
  id: 1,
  names: { fr: 'Bulbizarre', en: 'Bulbasaur' },
  types: ['grass'],
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
};

const mockTypeColors = {
  grass: { backgroundColor: '#7AC74C', translations: { fr: 'Plante' } }
};

describe('PokemonCard', () => {
  it('affiche le nom traduit et le numéro formaté (No. 001)', () => {
    render(
      <LanguageProvider>
        <PokemonCard pokemon={mockPokemon} typeColors={mockTypeColors} />
      </LanguageProvider>
    );

    expect(screen.getByText(/No. 001/i)).toBeInTheDocument();
    expect(screen.getByText(/Bulbizarre/i)).toBeInTheDocument();
  });
});