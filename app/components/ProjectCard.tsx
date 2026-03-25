'use client';

import type { Lang } from '../translations';

interface Project {
  readonly id: number;
  readonly title: Readonly<Record<Lang, string>>;
  readonly description: Readonly<Record<Lang, string>>;
  readonly tags: readonly string[];
  readonly liveUrl: string;
  readonly codeUrl: string;
  readonly status: Readonly<Record<Lang, string>>;
}

export default function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <div className="projectCard">
      <div className="projectBrowser">
        <span className="projectBrowserDot codeDotRed" />
        <span className="projectBrowserDot codeDotYellow" />
        <span className="projectBrowserDot codeDotGreen" />
      </div>
      <div className="projectPreview">
        <span className="projectPreviewText">{project.title[lang]}</span>
      </div>
      <div className="projectBody">
        <div className="projectStatus">{project.status[lang]}</div>
        <h3 className="projectTitle">{project.title[lang]}</h3>
        <p className="projectDesc">{project.description[lang]}</p>
        <div className="projectTags">
          {project.tags.map((tag) => (
            <span key={tag} className="projectTag">{tag}</span>
          ))}
        </div>
        <div className="projectLinks">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projectLink">
              {lang === 'en' ? 'View live' : 'Live ansehen'}
              <span className="projectLinkArrow">&rarr;</span>
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="projectLink">
              {lang === 'en' ? 'Source' : 'Quellcode'}
              <span className="projectLinkArrow">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
