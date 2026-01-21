import Image from 'next/image';

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
    liveUrl: 'https://example.com',
    codeUrl: '',
    featured: false,
  },

  {
    id: 2,
    title: 'Paw Match',
    description:
      'Paw Match is a mobile app that helps dog owners discover and connect with compatible dogs nearby.',
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
    featured: false,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'GPT-powered content assistant with custom templates and SEO optimization',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
    image: '/images/project3.jpg',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project3',
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <section className="heroSection">
          <div className="textContainer">
            <div className="headingContainer">
              <h1 className="heading1">
                Sebastian Speiser <br />
                <span className="accent">{'// web developer'}</span>
              </h1>
            </div>
            <div className="paragraphContainer">
              <p>
                I’m a frontend developer with a strong focus on clean UI,
                usability, and modern web technologies. I enjoy turning complex
                ideas into simple, intuitive digital experiences. I work mainly
                with React, Next.js, and TypeScript, and I like understanding
                things deeply rather than just making them work. Curious,
                reliable, and driven to improve with every project.
              </p>
            </div>
          </div>

          <div className="imageContainer">
            <Image
              src="/images/profile_small.webp"
              alt="Profile Picture of Sebastian Speiser"
              height={2166}
              width={1455}
              loading="eager"
              className="profileImage"
            />
          </div>
        </section>

        <section className="projectsSection">
          <h2 className="subheading">Featured Work</h2>
          <hr className="divider" />

          <div className="projectsGrid">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`projectCard ${project.featured ? 'featured' : ''}`}
              >
                <div className="browserMockup">
                  <div className="browserBar">
                    <div className="browserDots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="browserUrl">
                      <span className="urlIcon">🔒</span>
                      <span className="urlText">
                        {project.liveUrl.replace('https://', '')}
                      </span>
                    </div>
                  </div>
                  <div className="projectImageWrapper">
                    <div className="projectImagePlaceholder">
                      <span className="placeholderText">
                        Project Screenshot
                      </span>
                    </div>
                  </div>
                </div>

                <div className="projectContent">
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>

                  <div className="projectTags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="projectLinks">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink primary"
                    >
                      <span>View Live</span>
                      <span className="arrow">→</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink secondary"
                    >
                      <span>Source</span>
                      <span className="codeIcon">{'</>'}</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
