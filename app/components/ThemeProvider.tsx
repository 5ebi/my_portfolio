'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import type { Lang } from '../translations';

interface ThemeContextType {
  theme: 'dark' | 'light';
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  lang: 'en',
  toggleTheme: () => {},
  toggleLang: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'en' ? 'de' : 'en'));

  return (
    <ThemeContext value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </ThemeContext>
  );
}
