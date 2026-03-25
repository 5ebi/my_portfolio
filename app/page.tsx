'use client';

import Navigation from './components/Navigation';
import HeroCodeBlock from './components/HeroCodeBlock';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import ThemeProvider, { useTheme } from './components/ThemeProvider';
import { translations } from './translations';

function HomeContent() {
  const { lang } = useTheme();
  const t = translations.projects;
  const projects = translations.projectData;

  return (
    <>
      <Navigation />

      <main>
        <HeroCodeBlock />

        <section className="projects" id="projects">
          <div className="projectsInner">
            <ScrollReveal>
              <div className="sectionHeaderRow">
                <div>
                  <span className="sectionLabel">{t.sectionLabel[lang]}</span>
                  <h2 className="sectionHeading">
                    {t.heading1[lang]}
                    <br />
                    {t.heading2[lang]}
                  </h2>
                </div>
                <span className="sectionCount">
                  [001 - {String(projects.length).padStart(3, '0')}]
                </span>
              </div>
            </ScrollReveal>

            <div className="projectsGrid">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id}>
                  <ProjectCard project={project} index={index} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

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

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
