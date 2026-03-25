'use client';

import ThemeProvider, { useApp } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import { t } from './translations';

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

export default function Page() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
