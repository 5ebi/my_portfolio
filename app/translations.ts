export type Lang = 'en' | 'de';

export const translations = {
  nav: {
    projects: { en: 'PROJECTS', de: 'PROJEKTE' },
    techStack: { en: 'TECH_STACK', de: 'TECH_STACK' },
    contact: { en: 'CONTACT', de: 'KONTAKT' },
  },
  hero: {
    status: {
      en: 'STATUS: OPEN_FOR_COLLABORATION',
      de: 'STATUS: OFFEN_FÜR_ZUSAMMENARBEIT',
    },
    description: {
      en: 'Frontend developer specializing in ',
      de: 'Frontend-Entwickler spezialisiert auf ',
    },
    descriptionStrong: {
      en: 'clean, high-performance interfaces',
      de: 'saubere, performante Interfaces',
    },
    descriptionEnd: {
      en: ' and modern web technologies. Building digital infrastructure that prioritizes usability over complexity.',
      de: ' und moderne Web-Technologien. Digitale Infrastruktur, die Benutzerfreundlichkeit über Komplexität stellt.',
    },
    btnContact: { en: 'INITIALIZE_CONTACT', de: 'KONTAKT_AUFNEHMEN' },
    btnProjects: { en: 'VIEW_PROJECTS', de: 'PROJEKTE_ANSEHEN' },
    yearsExp: { en: 'YEARS_EXP', de: 'JAHRE_ERF' },
  },
  projects: {
    sectionLabel: { en: '[ SELECTED_WORKS ]', de: '[ AUSGEWÄHLTE_ARBEITEN ]' },
    heading1: { en: 'ENGINEERED', de: 'ENTWICKELTE' },
    heading2: { en: 'SOLUTIONS', de: 'LÖSUNGEN' },
  },
  projectCard: {
    viewLive: { en: 'VIEW_LIVE', de: 'LIVE_ANSEHEN' },
    comingSoon: { en: 'COMING_SOON', de: 'DEMNÄCHST' },
    sourceCode: { en: 'SOURCE_CODE', de: 'QUELLCODE' },
  },
  projectData: [
    {
      id: 1,
      title: {
        en: 'Psychotherapy Practice Website',
        de: 'Psychotherapie Praxis Webseite',
      },
      description: {
        en: 'Modern, fast, and SEO-focused website for a psychotherapy practice. Designed to build trust and improve local visibility.',
        de: 'Moderne, schnelle und SEO-fokussierte Webseite für eine Psychotherapiepraxis. Entwickelt um Vertrauen aufzubauen und lokale Sichtbarkeit zu verbessern.',
      },
      tags: ['Next.js', 'TypeScript', 'React', 'SEO', 'Responsive Design', 'Google Maps'],
      image: '/images/psychotherapy-website.jpg',
      liveUrl: 'https://psychtherapie-rusch.at',
      codeUrl: '',
      category: { en: 'CLIENT_PROJECT', de: 'KUNDENPROJEKT' },
    },
    {
      id: 2,
      title: {
        en: 'Paw Match',
        de: 'Paw Match',
      },
      description: {
        en: 'Mobile app that helps dog owners discover and connect with compatible dogs nearby. Full-stack with REST API.',
        de: 'Mobile App die Hundebesitzern hilft, kompatible Hunde in der Nähe zu entdecken und sich zu vernetzen. Full-Stack mit REST API.',
      },
      tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Zod'],
      image: '/images/paw-match.jpg',
      liveUrl: '',
      codeUrl: 'https://github.com/5ebi/finalproject-fall-2024-atvie',
      category: { en: 'MOBILE_APP', de: 'MOBILE_APP' },
    },
    {
      id: 3,
      title: {
        en: 'AI Content Generator',
        de: 'KI Content Generator',
      },
      description: {
        en: 'GPT-powered content assistant with custom templates and SEO optimization for efficient content creation.',
        de: 'GPT-basierter Content-Assistent mit individuellen Vorlagen und SEO-Optimierung für effiziente Inhaltserstellung.',
      },
      tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
      image: '/images/project3.jpg',
      liveUrl: 'https://whyem.com',
      codeUrl: '',
      category: { en: 'SAAS_TOOL', de: 'SAAS_TOOL' },
    },
  ],
  stack: {
    sectionLabel: { en: '[ TECH_CAPABILITIES ]', de: '[ TECH_FÄHIGKEITEN ]' },
    heading1: { en: 'ENGINEERING', de: 'ENGINEERING' },
    heading2: { en: 'STACK', de: 'STACK' },
    description: {
      en: 'A focused selection of technologies optimized for performance, developer experience, and shipping fast.',
      de: 'Eine fokussierte Auswahl an Technologien, optimiert für Performance, Entwicklererfahrung und schnelle Auslieferung.',
    },
  },
  footer: {
    sectionLabel: { en: '[ DEPLOYMENT_READY ]', de: '[ BEREIT_ZUM_EINSATZ ]' },
    heading1: { en: 'READY TO BUILD', de: 'BEREIT ETWAS' },
    heading2: { en: 'SOMETHING GREAT?', de: 'GROSSES ZU BAUEN?' },
    description: {
      en: "Currently accepting new projects and collaborations. Let's build something that works beautifully.",
      de: 'Aktuell offen für neue Projekte und Zusammenarbeit. Lass uns etwas bauen, das wunderbar funktioniert.',
    },
    btnContact: { en: 'ESTABLISH_CONNECTION', de: 'VERBINDUNG_HERSTELLEN' },
    btnGithub: { en: 'VIEW_GITHUB', de: 'GITHUB_ANSEHEN' },
    copyright: { en: 'ALL_RIGHTS_RESERVED', de: 'ALLE_RECHTE_VORBEHALTEN' },
    systemStable: { en: 'SYSTEM_STABLE', de: 'SYSTEM_STABIL' },
  },
} as const;
