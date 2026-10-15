import { createContext, useContext, useEffect } from 'react';

// Theme is locked to dark — the light-mode toggle was removed by design.
const ThemeContext = createContext({ dark: true, toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ dark: true, toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};
