'use client'; 

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Container, Paper } from '@mui/material';

export default function Error({ error, reset }) {


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
            border: '1px solid rgba(0, 0, 0, 0.1)',
            mb: 4 
          }}
        >
          <Image 
            src="/oups.png" 
            alt="Erreur Pokémon"
            fill 
            style={{ objectFit: 'cover' }}
            priority 
          />
        </Paper>

        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1,  }}>
          Oups ! Une erreur est survenue
        </Typography>
        
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
          L'appel au Pokédex a échoué. Veuillez réessayer.
        </Typography>

        <Button 
          variant="contained" 
          size="large" 
          onClick={() => reset()}
          sx={{ 
            borderRadius: 4, 
            px: 5, 
            fontWeight: 'bold',
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' }
          }}
        >
          Réessayer
        </Button>
      </Box>
    </Container>
  );
}