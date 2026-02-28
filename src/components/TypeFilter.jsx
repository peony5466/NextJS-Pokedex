"use client";
import React from 'react';
import { Box, Chip } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

export default function TypeFilter({ allTypes, selectedType, onTypeSelect, typeColors }) {
  const { language } = useLanguage();

  return (
    <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
      <Chip 
        label="TOUS" 
        onClick={() => onTypeSelect(null)}
        variant={selectedType === null ? "filled" : "outlined"}
        color="primary"
      />
      {allTypes.map((type) => (
        <Chip 
          key={type}
          label={(typeColors[type]?.translations[language] || type).toUpperCase()}
          onClick={() => onTypeSelect(type === selectedType ? null : type)}
          sx={{ 
            backgroundColor: selectedType === type ? typeColors[type].backgroundColor : 'transparent',
            color: selectedType === type ? 'white' : 'text.primary',
            borderColor: typeColors[type]?.backgroundColor,
            fontWeight: 'bold'
          }}
          variant={selectedType === type ? "filled" : "outlined"}
        />
      ))}
    </Box>
  );
}