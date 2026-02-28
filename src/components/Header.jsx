"use client";
import { Box, IconButton } from '@mui/material';
import Logo from './Logo';
import { useThemeMode } from '@/context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageSelection from './LanguageSelection';

export default function Header() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box sx={{ 
      p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      bgcolor: mode === 'dark' ? '#080c1b' : 'primary.main',
      transition: '0.3s', mb: 2
    }}>
      <Logo />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon sx={{ color: '#fff' }} /> : <Brightness4Icon sx={{ color: '#fff' }} />}
        </IconButton>
        <LanguageSelection />
      </Box>
    </Box>
  );
}