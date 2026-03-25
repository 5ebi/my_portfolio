'use client';

import { useApp } from './ThemeProvider';
import { t } from '../translations';

export default function Footer() {
  const { lang } = useApp();

  return (
    <>
      {/* Contact CTA */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="sectionLabel">{t.contact.label[lang]}</div>
          <div className="contactCard">
            <h2 className="contactHeading">{t.contact.heading[lang]}</h2>
            <p className="contactSub">{t.contact.subtitle[lang]}</p>
            <a href="mailto:work@sebastianspeiser.com" className="contactBtn">
              {t.contact.btn[lang]}
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footerInner">
            <div className="footerLinks">
              <a href="https://github.com/5ebi" target="_blank" rel="noopener noreferrer" className="footerLink">
                GitHub
              </a>
              <a href="mailto:work@sebastianspeiser.com" className="footerLink">
                Email
              </a>
            </div>
            <span className="footerCopy">
              &copy; {new Date().getFullYear()} Sebastian Speiser &middot; {t.footer.copy[lang]}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
