"use client";
import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

export default function SearchBar({ onSearchChange, pokemons, value }) {
  const { language } = useLanguage();
  const options = pokemons?.map(p => p.names[language] || p.names['en']) || [];

  return (
    <Autocomplete
      freeSolo
      options={options}
      inputValue={value}
      onInputChange={(e, val) => onSearchChange(val)}
      renderInput={(params) => <TextField {...params} fullWidth autoFocus label="Rechercher un Pokémon..." variant="outlined" />}
      sx={{ mb: 4, mt: 2 }}
    />
  );
}