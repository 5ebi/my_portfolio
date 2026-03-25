'use client';

import Link from 'next/link';
import { useApp } from './ThemeProvider';
import { t } from '../translations';

export default function Navigation() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();

  return (
    <>
      <nav className="nav">
        <div className="navInner">
          <Link href="/" className="navLogo">
            <span className="navLogoAccent">SEBASTIAN</span>SPEISER
          </Link>

          <div className="navLinks">
            <a href="#projects" className="navLink">
              {t.nav.projects[lang]}
            </a>
            <a href="#stack" className="navLink">
              {t.nav.stack[lang]}
            </a>
            <a href="#contact" className="navLink">
              {t.nav.contact[lang]}
            </a>
          </div>

          <div className="navToggles">
            <button
              onClick={toggleTheme}
              className="navToggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleLang}
              className="navToggle navToggleLang"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'DE' : 'EN'}
            </button>
          </div>
        </div>
        <div className="scanline" />
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="mobileNav">
        <div className="mobileNavInner">
          <a href="#projects" className="mobileNavLink">
            <span className="mobileNavIcon">&#9638;</span>
            <span className="mobileNavLabel">{t.nav.projects[lang]}</span>
          </a>
          <a href="#stack" className="mobileNavLink">
            <span className="mobileNavIcon">&#123;&#125;</span>
            <span className="mobileNavLabel">{t.nav.stack[lang]}</span>
          </a>
          <a href="#contact" className="mobileNavLink">
            <span className="mobileNavIcon">@</span>
            <span className="mobileNavLabel">{t.nav.contact[lang]}</span>
          </a>
        </div>
      </div>
    </>
  );
}
