"use client";
import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import PokemonCard from './PokemonCard';
import TypeFilter from './TypeFilter'; 
import { useLanguage } from '@/context/LanguageContext';

export default function PokemonListPage({ initialPokemons, typeColors }) {
  const [searchTerm, setSearchTerm] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('pokedex-search') || "";
    return "";
  });
  const [selectedType, setSelectedType] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    localStorage.setItem('pokedex-search', searchTerm);
  }, [searchTerm]);

  const allTypes = typeColors ? Object.keys(typeColors) : [];

  const filteredPokemons = (initialPokemons || []).filter((pokemon) => {
    const name = pokemon.names?.[language] || pokemon.names?.en || "";
    const matchesName = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || pokemon.types.includes(selectedType);
    return matchesName && matchesType;
  });

  return (
    <Container sx={{ py: 4 }}>
      <SearchBar value={searchTerm} onSearchChange={setSearchTerm} pokemons={initialPokemons} />

      <TypeFilter 
        allTypes={allTypes} 
        selectedType={selectedType} 
        onTypeSelect={setSelectedType} 
        typeColors={typeColors} 
      />

      <Grid container spacing={3}>
        {filteredPokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} typeColors={typeColors} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}