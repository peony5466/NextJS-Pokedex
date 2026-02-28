"use client";
import React from 'react';
import { Chip } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

export default function TypeBadge({ type, typeColors }) {
  const { language } = useLanguage();
  const normalizedType = type.toLowerCase();
  
  const colorData = typeColors ? typeColors[normalizedType] : null;
  const backgroundColor = colorData?.backgroundColor || '#ccc';
  const label = colorData?.translations[language] || type; 

  return (
    <Chip 
      label={label.toUpperCase()} 
      size="small" 
      sx={{ 
        backgroundColor, 
        color: 'white', 
        fontWeight: 'bold',
        fontSize: '0.7rem'
      }} 
    />
  );
}