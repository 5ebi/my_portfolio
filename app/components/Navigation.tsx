import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="navInner">
        <Link href="/" className="navLogo">
          {'<'}
          <span className="navLogoAccent">seb</span>
          {'.dev />'}
        </Link>

        <div className="navLinks">
          <a href="#projects" className="navLink">
            <span className="navComment">{'// '}</span>projects
          </a>
          <a href="#contact" className="navLink">
            <span className="navComment">{'// '}</span>contact
          </a>
          <a
            href="https://github.com/5ebi"
            target="_blank"
            rel="noopener noreferrer"
            className="navLink"
          >
            <span className="navComment">{'// '}</span>github
          </a>
        </div>
      </div>
    </nav>
  );
}
