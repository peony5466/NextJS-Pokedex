import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Button, Container, Paper } from '@mui/material';

export default function NotFound() {
  return (
    <Container>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '90vh',
          textAlign: 'center' 
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            position: 'relative', 
            width: { xs: '280px', sm: '400px' }, 
            height: { xs: '180px', sm: '250px' }, 
            bgcolor: 'transparent',
            borderRadius: 4, 
            overflow: 'hidden', 
            transition: '0.3s ease-in-out',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            '&:hover': { transform: 'translateY(-10px)' },
            mb: 4 
          }}
        >
          <Image 
            src="/Pokemon-404-page.avif" 
            alt="Pokémon introuvable"
            fill 
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center'
            }}
            priority 
          />
        </Paper>

        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
          Oups ! Page introuvable
        </Typography>
        
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
          Ce Pokémon est introuvable dans cette zone.
        </Typography>

        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ borderRadius: 4, px: 5, fontWeight: 'bold' }}
          >
            Retourner au Pokédex
          </Button>
        </Link>
      </Box>
    </Container>
  );
}