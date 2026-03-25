export type Lang = 'en' | 'de';

export const t = {
  nav: {
    projects: { en: 'Projects', de: 'Projekte' },
    stack: { en: 'Stack', de: 'Stack' },
    contact: { en: 'Contact', de: 'Kontakt' },
  },
  hero: {
    status: { en: 'Available for work', de: 'Verfügbar für Projekte' },
    subtitle: {
      en: "I'm a frontend developer with a strong focus on clean UI, usability, and modern web technologies. I enjoy turning complex ideas into simple, intuitive digital experiences.",
      de: 'Ich bin Frontend-Entwickler mit starkem Fokus auf saubere UI, Benutzerfreundlichkeit und moderne Web-Technologien. Ich verwandle komplexe Ideen gerne in einfache, intuitive digitale Erlebnisse.',
    },
    cta: { en: 'Get in touch', de: 'Kontakt aufnehmen' },
    work: { en: 'View work', de: 'Projekte ansehen' },
  },
  projects: {
    label: { en: 'Selected Work', de: 'Ausgewählte Arbeiten' },
    viewLive: { en: 'View live', de: 'Live ansehen' },
    source: { en: 'Source', de: 'Quellcode' },
    comingSoon: { en: 'Coming soon', de: 'Demnächst' },
  },
  stack: {
    label: { en: 'Technical Proficiencies', de: 'Technische Fähigkeiten' },
  },
  contact: {
    label: { en: 'Initiate Collaboration', de: 'Zusammenarbeit starten' },
    heading: {
      en: "Let's build something great together.",
      de: 'Lass uns gemeinsam etwas Großartiges bauen.',
    },
    subtitle: {
      en: 'Currently accepting new projects and collaborations.',
      de: 'Aktuell offen für neue Projekte und Zusammenarbeit.',
    },
    btn: { en: 'Send message', de: 'Nachricht senden' },
  },
  footer: {
    copy: { en: 'Designed for performance', de: 'Designed für Performance' },
  },
  projectData: [
    {
      id: 1,
      title: { en: 'Psychotherapy Practice', de: 'Psychotherapie Praxis' },
      description: {
        en: 'Modern, fast, and SEO-focused website designed to build trust and improve local visibility.',
        de: 'Moderne, schnelle und SEO-fokussierte Webseite, die Vertrauen aufbaut und lokale Sichtbarkeit verbessert.',
      },
      tags: ['Next.js', 'TypeScript', 'React', 'SEO'],
      liveUrl: 'https://psychotherapie-rusch.at',
      codeUrl: '',
      status: { en: 'Live', de: 'Live' },
    },
    {
      id: 2,
      title: { en: 'Paw Match', de: 'Paw Match' },
      description: {
        en: 'Mobile app that helps dog owners discover and connect with compatible dogs nearby.',
        de: 'Mobile App, die Hundebesitzern hilft, kompatible Hunde in der Nähe zu finden.',
      },
      tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL'],
      liveUrl: '',
      codeUrl: 'https://github.com/5ebi/finalproject-fall-2024-atvie',
      status: { en: 'In progress', de: 'In Entwicklung' },
    },
    {
      id: 3,
      title: { en: 'whyem', de: 'whyem' },
      description: {
        en: 'AI-powered content platform with custom templates and SEO optimization tools.',
        de: 'KI-gestützte Content-Plattform mit individuellen Vorlagen und SEO-Optimierungstools.',
      },
      tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
      liveUrl: 'https://whyem.com',
      codeUrl: '',
      status: { en: 'Live', de: 'Live' },
    },
  ],
  skills: [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'HTML / CSS', level: 92 },
    { name: 'React Native / Expo', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'PostgreSQL', level: 70 },
  ],
} as const;
