export type Lang = 'en' | 'de';

export const t = {
  nav: {
    projects: { en: 'Work', de: 'Projekte' },
    stack: { en: 'Stack', de: 'Stack' },
    contact: { en: 'Contact', de: 'Kontakt' },
  },
  hero: {
    status: { en: 'Open for projects', de: 'Offen für Projekte' },
    subtitle: {
      en: 'Based in Vienna. I design and build digital products that feel right. Clean interfaces, sharp code, no fluff. From concept to deploy — I craft experiences that work as good as they look.',
      de: 'Aus Wien. Ich designe und baue digitale Produkte, die sich richtig anfühlen. Klare Interfaces, sauberer Code, kein Überfluss. Vom Konzept bis zum Deploy — ich schaffe Erlebnisse, die so gut funktionieren wie sie aussehen.',
    },
    cta: { en: 'Start a project', de: 'Projekt starten' },
    work: { en: 'See the work', de: 'Arbeiten ansehen' },
  },
  projects: {
    label: { en: 'Selected Work', de: 'Ausgewählte Arbeiten' },
    viewLive: { en: 'Visit', de: 'Ansehen' },
    source: { en: 'Source', de: 'Quellcode' },
    comingSoon: { en: 'Coming soon', de: 'Demnächst' },
  },
  stack: {
    label: { en: 'Tools & Technologies', de: 'Tools & Technologien' },
  },
  contact: {
    label: { en: "What's next?", de: 'Was kommt als Nächstes?' },
    heading: {
      en: "Got an idea? Let's make it real.",
      de: 'Eine Idee? Lass sie uns umsetzen.',
    },
    subtitle: {
      en: "I'm always interested in new projects, collaborations, and ambitious ideas. Let's talk.",
      de: 'Ich bin immer offen für neue Projekte, Kollaborationen und ambitionierte Ideen. Lass uns reden.',
    },
    btn: { en: 'Say hello', de: 'Sag hallo' },
  },
  footer: {
    copy: { en: 'Built with precision', de: 'Gebaut mit Präzision' },
  },
  projectData: [
    {
      id: 1,
      title: { en: 'Psychotherapy Practice', de: 'Psychotherapie Praxis' },
      description: {
        en: 'A calming, trust-building web presence for a psychotherapy practice. Fast, accessible, and optimized to rank locally.',
        de: 'Eine beruhigende, vertrauensbildende Webpräsenz für eine Psychotherapie-Praxis. Schnell, barrierefrei und lokal optimiert.',
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
        en: 'A mobile app connecting dog owners with compatible matches nearby. Swipe, match, meet.',
        de: 'Eine Mobile App, die Hundebesitzer mit passenden Matches in der Nähe verbindet. Swipen, matchen, treffen.',
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
        en: 'AI-powered content platform. Custom templates, smart SEO tools, and a workflow that actually makes sense.',
        de: 'KI-gestützte Content-Plattform. Individuelle Vorlagen, smarte SEO-Tools und ein Workflow, der wirklich Sinn macht.',
      },
      tags: ['Next.js', 'OpenAI', 'TailwindCSS'],
      liveUrl: 'https://whyem.com',
      codeUrl: '',
      previewImage: '/images/whyem-preview.png',
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
