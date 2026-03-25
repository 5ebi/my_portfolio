'use client';

import ThemeProvider, { useApp } from './ThemeProvider';
import Navigation from './Navigation';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import TechStack from './TechStack';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { t } from '../translations';

function Projects() {
  const { lang } = useApp();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="sectionLabel">{t.projects.label[lang]}</div>
        <div className="projectsGrid">
          {t.projectData.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}

export default function ClientApp() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
