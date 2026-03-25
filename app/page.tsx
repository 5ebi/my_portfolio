import Navigation from './components/Navigation';
import HeroCodeBlock from './components/HeroCodeBlock';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'Psychotherapy Practice Website',
    description:
      'A modern, fast, and SEO-focused website for a psychotherapy practice, designed to build trust and improve local visibility.',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'SEO',
      'Responsive Design',
      'Google Maps',
    ],
    image: '/images/psychotherapy-website.jpg',
    liveUrl: 'https://psychtherapie-rusch.at',
    codeUrl: '',
  },
  {
    id: 2,
    title: 'Paw Match',
    description:
      'A mobile app that helps dog owners discover and connect with compatible dogs nearby.',
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST API',
      'Zod',
    ],
    image: '/images/paw-match.jpg',
    liveUrl: '',
    codeUrl: 'https://github.com/5ebi/finalproject-fall-2024-atvie',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'GPT-powered content assistant with custom templates and SEO optimization.',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
    image: '/images/project3.jpg',
    liveUrl: 'https://whyem.com',
    codeUrl: 'https://github.com/yourusername/project3',
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroCodeBlock />

        <section className="projects" id="projects">
          <ScrollReveal>
            <div className="sectionHeader">
              <div className="sectionTitle">
                {'// featured_work'}
              </div>
              <h2 className="sectionHeading">Things I&apos;ve Built</h2>
            </div>
          </ScrollReveal>

          <div className="projectsGrid">
            {projects.map((project) => (
              <ScrollReveal key={project.id}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}
