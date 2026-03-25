interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="projectCard">
      <div className="projectBrowser">
        <div className="projectBrowserBar">
          <div className="projectBrowserDots">
            <span className="browserDot browserDotRed" />
            <span className="browserDot browserDotYellow" />
            <span className="browserDot browserDotGreen" />
          </div>
          <div className="projectBrowserUrl">
            <svg
              className="lockIcon"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <span>
              {project.liveUrl
                ? project.liveUrl.replace('https://', '')
                : 'coming-soon.dev'}
            </span>
          </div>
        </div>
        <div className="projectScreenshot">
          <div className="projectScreenshotGradient">
            <span className="projectScreenshotLabel">
              {'{'}
              {project.title}
              {'}'}
            </span>
          </div>
        </div>
      </div>

      <div className="projectInfo">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectDescription">{project.description}</p>

        <div className="projectTags">
          {project.tags.map((tag) => (
            <span key={tag} className="projectTag">
              {tag}
            </span>
          ))}
        </div>

        <div className="projectActions">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectAction projectActionPrimary"
            >
              View Live
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ) : (
            <span className="projectAction projectActionDisabled">
              Coming Soon
            </span>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectAction projectActionSecondary"
            >
              Source {'</>'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
