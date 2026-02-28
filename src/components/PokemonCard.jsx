"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Paper, Typography, Box, alpha } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';
import { useThemeMode } from '@/context/ThemeContext';
import TypeBadge from './TypeBadge';

export default function PokemonCard({ pokemon, typeColors }) {
  const { language } = useLanguage();
  const { mode } = useThemeMode();
  const name = pokemon.names[language] || pokemon.names.en;

  //  Récupération des types 
  const type1 = pokemon.types?.[0]?.toLowerCase();
  const type2 = pokemon.types?.[1]?.toLowerCase();

  //  Récupération des couleurs depuis typeColors 
  const color1 = typeColors?.[type1]?.backgroundColor || '#9e9e9e';
  const color2 = type2 ? typeColors?.[type2]?.backgroundColor : null;

  // dégradé de fond
  const backgroundGradient = color2
    ? `linear-gradient(115deg, ${alpha(color1, 0.4)} 0%, ${alpha(color2, 0.3)} 100%)`
    : `linear-gradient(0deg, ${alpha(color1, 0.4)} 0%, rgba(0,0,0,0.6) 100%)`;

  const glowColor = color1;

  //  Styles conditionnels selon le mode
  const cardStyle = mode === 'dark' ? {
    background: backgroundGradient,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${alpha(glowColor, 0.3)}`,
    '&:hover': {
      transform: 'translateY(-10px)',
      border: `1px solid ${glowColor}`,
      boxShadow: `0 0 20px ${alpha(glowColor, 0.3)}, 0 0 40px ${alpha(glowColor, 0.4)}`,
    }
  } : {
    bgcolor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    '&:hover': { transform: 'translateY(-10px)' }
  };

  return (
    <Paper 
      component={Link}
      href={`/pokemon/${pokemon.id}`} 
      sx={{ 
        p: 3, textAlign: 'center', display: 'block', textDecoration: 'none',
        borderRadius: 2, transition: 'all 0.4s ease-in-out',width: '100%',boxSizing: 'border-box',  ...cardStyle 
      }}
    >
      <Typography variant="caption" sx={{ color: mode === 'dark' ? alpha('#fff', 0.5) : 'text.secondary' }}>
        No. {String(pokemon.id).padStart(3, '0')}
      </Typography>
      
      <Typography noWrap variant="h6" sx={{ fontWeight: 'bold', width: '100%',mb: 1, color: mode === 'dark' ? '#fff' : '#171717' }}>
        {name}
      </Typography>

      <Box sx={{ position: 'relative', width: 120, height: 120, margin: 'auto', mb: 2 }}>
        <LazyLoadImage 
          src={pokemon.image} 
          alt={name} 
          width={130}
          height={130}
          placeholderSrc="/pokeball.gif" 
          style={{ 
            objectFit: 'contain',
            filter: mode === 'dark' ? `drop-shadow(0 0 8px ${alpha(glowColor, 0.5)})` : 'none'
          }} 
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
        {pokemon.types.map(type => (
          <TypeBadge key={type} type={type} typeColors={typeColors} />
        ))}
      </Box>
    </Paper>
  );
}