export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="ctaSection">
        <div className="ctaInner">
          <span className="sectionLabel">[ DEPLOYMENT_READY ]</span>
          <h2 className="ctaHeading">
            READY TO BUILD
            <br />
            SOMETHING GREAT?
          </h2>
          <p className="ctaDescription">
            Currently accepting new projects and collaborations.
            Let&apos;s build something that works beautifully.
          </p>

          <div className="ctaActions">
            <a href="mailto:work@sebastianspeiser.com" className="btnPrimary">
              ESTABLISH_CONNECTION
            </a>
            <a
              href="https://github.com/5ebi"
              target="_blank"
              rel="noopener noreferrer"
              className="btnSecondary"
            >
              VIEW_GITHUB
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomInner">
          <span className="footerCopy">
            &copy; {new Date().getFullYear()} SEBASTIAN_SPEISER // ALL_RIGHTS_RESERVED
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
            SYSTEM_STABLE
          </span>
        </div>
      </div>
    </footer>
  );
}
