import Navigation from './components/Navigation';
import HeroCodeBlock from './components/HeroCodeBlock';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'Psychotherapy Practice Website',
    description:
      'Modern, fast, and SEO-focused website for a psychotherapy practice. Designed to build trust and improve local visibility.',
    tags: ['Next.js', 'TypeScript', 'React', 'SEO', 'Responsive Design', 'Google Maps'],
    image: '/images/psychotherapy-website.jpg',
    liveUrl: 'https://psychtherapie-rusch.at',
    codeUrl: '',
    category: 'CLIENT_PROJECT',
  },
  {
    id: 2,
    title: 'Paw Match',
    description:
      'Mobile app that helps dog owners discover and connect with compatible dogs nearby. Full-stack with REST API.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Zod'],
    image: '/images/paw-match.jpg',
    liveUrl: '',
    codeUrl: 'https://github.com/5ebi/finalproject-fall-2024-atvie',
    category: 'MOBILE_APP',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'GPT-powered content assistant with custom templates and SEO optimization for efficient content creation.',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
    image: '/images/project3.jpg',
    liveUrl: 'https://whyem.com',
    codeUrl: '',
    category: 'SAAS_TOOL',
  },
];

export default function Home() {
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
                  <span className="sectionLabel">[ SELECTED_WORKS ]</span>
                  <h2 className="sectionHeading">
                    ENGINEERED
                    <br />
                    SOLUTIONS
                  </h2>
                </div>
                <span className="sectionCount">[001 - {String(projects.length).padStart(3, '0')}]</span>
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
