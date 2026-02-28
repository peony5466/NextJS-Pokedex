import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function Logo() {
  return (
    <Link href="/">
      <Box component="img" src="/logopok.svg" alt="Pokedex Logo" sx={{ width: 180, cursor: 'pointer' }} />
    </Link>
  );
}