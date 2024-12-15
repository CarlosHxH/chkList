"use client"
import React, { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, PaletteMode } from '@mui/material';

const AppThemeContext = createContext({ mode:'light', toggleTheme: ()=>null });

const AppThemeProvider = ({children}: Readonly<{children: React.ReactNode }>) => {
  const [mode, setMode]  = useState<PaletteMode>('light');

  const theme = useMemo(() => createTheme({palette: { mode }}), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppThemeContext.Provider value={{ mode, toggleTheme } as any}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
export default AppThemeProvider;