'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang } from '../translations';

type Theme = 'dark' | 'light';

const Ctx = createContext<{
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
}>({ theme: 'dark', lang: 'en', toggleTheme: () => {}, toggleLang: () => {} });

export const useApp = () => useContext(Ctx);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  return (
    <Ctx value={{
      theme, lang,
      toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
      toggleLang: () => setLang(l => l === 'en' ? 'de' : 'en'),
    }}>
      {children}
    </Ctx>
  );
}
