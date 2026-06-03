import { ExternalLink, Github } from 'lucide-react';
import { Button } from './Button.jsx';
import { useSpotlight } from '../hooks/useSpotlight.js';

export function ProjectCard({ project, compact = false }) {
  const spotlight = useSpotlight();

  return (
    <article
      {...spotlight}
      className={`card-spotlight group flex h-full flex-col rounded-[24px] border border-line-site p-5 shadow-site transition duration-200 ease-out hover:-translate-y-1 hover:border-[#22c55e]/35 hover:shadow-hover-site sm:p-6 ${
        compact ? 'min-h-[320px]' : 'min-h-[320px]'
      }`}
    >
      <div className="mb-5 flex min-h-16 flex-wrap items-start gap-2">
        <span className="rounded-full border border-accent-border bg-accent-muted px-3 py-1 text-xs font-semibold text-[#16a34a] dark:text-[#22c55e]">
          {project.category}
        </span>
        {project.type ? (
          <span className="rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.035] px-3 py-1 text-xs font-medium text-text-secondary">
            {project.type}
          </span>
        ) : null}
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line-site bg-surface-strong px-3 py-1 text-xs font-medium text-text-muted transition group-hover:border-line-strong group-hover:text-text-main"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="min-h-[3.25rem] text-[1.35rem] font-semibold leading-tight tracking-normal text-text-main sm:text-2xl">
        {project.title}
      </h3>
      <p className="line-clamp-3 mt-4 flex-1 text-sm leading-7 text-text-muted">{project.description}</p>
      <div className="mt-7 flex min-h-[61px] flex-wrap items-start gap-3 border-t border-line-site pt-5">
        <Button href={project.github} icon={Github} variant="secondary" className="min-h-10 px-4">
          GitHub
        </Button>
        {project.live ? (
          <Button href={project.live} icon={ExternalLink} variant="secondary" className="min-h-10 px-4">
            Demo
          </Button>
        ) : null}
      </div>
    </article>
  );
}
