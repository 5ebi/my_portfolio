'use client';

import { useTheme } from './ThemeProvider';
import { translations } from '../translations';
import type { Lang } from '../translations';

interface Project {
  id: number;
  title: Readonly<Record<Lang, string>>;
  description: Readonly<Record<Lang, string>>;
  tags: readonly string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
  category: Readonly<Record<Lang, string>>;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang } = useTheme();
  const t = translations.projectCard;
  const displayTitle = project.title[lang].toUpperCase().replace(/ /g, '_');
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="projectCard">
      <div className="projectCardInner">
        <div className="projectMeta">
          <span className="projectCategory">[ {project.category[lang]} ]</span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectExternalLink"
              aria-label={`Visit ${project.title[lang]}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}
        </div>

        <div className="projectScreenshot">
          <div className="projectScreenshotGradient">
            <span className="projectNum">{num}</span>
          </div>
        </div>

        <div className="projectInfo">
          <div className="projectTags">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="projectTag">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="projectTitle">{displayTitle}</h3>
          <p className="projectDescription">{project.description[lang]}</p>

          <div className="projectActions">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projectAction projectActionPrimary"
              >
                {t.viewLive[lang]}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ) : (
              <span className="projectAction projectActionDisabled">
                {t.comingSoon[lang]}
              </span>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projectAction projectActionSecondary"
              >
                {t.sourceCode[lang]}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="projectAccentLine" />
    </article>
  );
}
