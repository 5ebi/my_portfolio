'use client';

import { useTheme } from './ThemeProvider';
import { translations } from '../translations';

export default function Footer() {
  const { lang } = useTheme();
  const t = translations.footer;

  return (
    <footer className="footer" id="contact">
      <div className="ctaSection">
        <div className="ctaInner">
          <span className="sectionLabel">{t.sectionLabel[lang]}</span>
          <h2 className="ctaHeading">
            {t.heading1[lang]}
            <br />
            {t.heading2[lang]}
          </h2>
          <p className="ctaDescription">{t.description[lang]}</p>

          <div className="ctaActions">
            <a href="mailto:work@sebastianspeiser.com" className="btnPrimary">
              {t.btnContact[lang]}
            </a>
            <a
              href="https://github.com/5ebi"
              target="_blank"
              rel="noopener noreferrer"
              className="btnSecondary"
            >
              {t.btnGithub[lang]}
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomInner">
          <span className="footerCopy">
            &copy; {new Date().getFullYear()} SEBASTIAN_SPEISER // {t.copyright[lang]}
          </span>
          <div className="footerLinks">
            <a
              href="https://github.com/5ebi"
              target="_blank"
              rel="noopener noreferrer"
              className="footerLink"
            >
              GITHUB
            </a>
            <a href="mailto:work@sebastianspeiser.com" className="footerLink">
              EMAIL
            </a>
          </div>
          <span className="footerStatus">
            <span className="statusDot" />
            {t.systemStable[lang]}
          </span>
        </div>
      </div>
    </footer>
  );
}
