import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="navInner">
        <Link href="/" className="navLogo">
          [<span className="navLogoAccent">SEB</span>.DEV]
        </Link>

        <div className="navLinks">
          <a href="#projects" className="navLink navLinkActive">
            PROJECTS
          </a>
          <a href="#stack" className="navLink">
            TECH_STACK
          </a>
          <a href="#contact" className="navLink">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
