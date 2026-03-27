'use client';

import Image from 'next/image';
import { t } from '../translations';
import type { Lang } from '../translations';

interface Project {
  readonly id: number;
  readonly title: Readonly<Record<Lang, string>>;
  readonly description: Readonly<Record<Lang, string>>;
  readonly tags: readonly string[];
  readonly liveUrl: string;
  readonly codeUrl: string;
  readonly previewImage?: string;
  readonly status: Readonly<Record<Lang, string>>;
}

export default function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const previewContent = project.previewImage ? (
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projectPreviewLink">
      <Image
        src={project.previewImage}
        alt={project.title[lang]}
        fill
        className="projectPreviewImg"
      />
    </a>
  ) : project.liveUrl ? (
    <div className="projectIframeWrap">
      <iframe
        src={project.liveUrl}
        className="projectIframe"
        title={project.title[lang]}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  ) : (
    <span className="projectPreviewText">{project.title[lang]}</span>
  );

  return (
    <article className="projectCard">
      <div className="projectBrowser">
        <span className="projectBrowserDot codeDotRed" />
        <span className="projectBrowserDot codeDotYellow" />
        <span className="projectBrowserDot codeDotGreen" />
        {project.liveUrl && (
          <span className="projectBrowserUrl">
            {project.liveUrl.replace('https://', '')}
          </span>
        )}
      </div>
      <div className="projectPreview">
        {previewContent}
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
              {t.projects.viewLive[lang]}
              <span className="projectLinkArrow">&rarr;</span>
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="projectLink">
              {t.projects.source[lang]}
              <span className="projectLinkArrow">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
