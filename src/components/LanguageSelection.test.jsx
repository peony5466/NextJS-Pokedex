import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import LanguageSelection from './LanguageSelection';
import { LanguageProvider } from '../context/LanguageContext';

describe('LanguageSelection', () => {
  it('affiche les options de langue FR, EN et DE', async () => {
    render(
      <LanguageProvider>
        <LanguageSelection />
      </LanguageProvider>
    );

    
    const selectButton = screen.getByRole('combobox');
    
    fireEvent.mouseDown(selectButton);

    const listbox = screen.getByRole('listbox');
    
    expect(within(listbox).getByText(/FR/i)).toBeInTheDocument();
    expect(within(listbox).getByText(/EN/i)).toBeInTheDocument();
    expect(within(listbox).getByText(/DE/i)).toBeInTheDocument();
  });
});