"use client";
import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSelection = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select
      value={language}
      onChange={(e) => setLanguage(e.target.value)} 
      size="small"
      sx={{ 
        color: 'white', 
        border: '1px solid rgba(255,255,255,0.5)',
        '& .MuiSvgIcon-root': { color: 'white' }
      }}
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="fr">FR</MenuItem>
      <MenuItem value="de">DE</MenuItem>
      <MenuItem value="it">IT</MenuItem>
      <MenuItem value="es">ES</MenuItem>
      <MenuItem value="ko">KO</MenuItem>
      <MenuItem value="ja">JA</MenuItem>
    </Select>
  );
};

export default LanguageSelection;