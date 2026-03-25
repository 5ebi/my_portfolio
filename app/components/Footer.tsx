export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerInner">
        <div className="footerHeading">
          <span className="synComment">{'// '}</span>
          <span className="footerHeadingText">let&apos;s connect</span>
        </div>

        <p className="footerDescription">
          Currently open to new opportunities. Whether you have a project in
          mind or just want to say hi, my inbox is always open.
        </p>

        <div className="footerLinks">
          <a href="mailto:sebastian.speiser@outlook.com" className="footerLink">
            <span className="footerLinkLabel">email</span>
            <span className="footerLinkValue">sebastian.speiser@outlook.com</span>
          </a>
          <a
            href="https://github.com/5ebi"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <span className="footerLinkLabel">github</span>
            <span className="footerLinkValue">github.com/5ebi</span>
          </a>
        </div>

        <div className="footerBottom">
          <span className="footerCopy">
            &copy; {new Date().getFullYear()} Sebastian Speiser
          </span>
          <span className="footerBuiltWith">
            Built with Next.js + TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
