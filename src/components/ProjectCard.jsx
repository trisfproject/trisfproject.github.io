import { useSpotlight } from '../hooks/useSpotlight.js';

export function ProjectCard({ project, compact = false }) {
  const spotlight = useSpotlight();

  return (
    <article
      {...spotlight}
      className={`card-spotlight group flex h-full flex-col rounded-[24px] border border-line-site p-5 shadow-site transition duration-200 ease-out hover:-translate-y-1 hover:border-[#22c55e]/35 hover:shadow-hover-site sm:p-6 ${
        compact ? 'min-h-[280px]' : 'min-h-[280px]'
      }`}
    >
      <div className="mb-5 flex flex-wrap items-start gap-2">
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
      <h3 className="mb-3 text-[1.35rem] font-semibold leading-tight tracking-normal text-text-main sm:text-2xl">
        {project.title}
      </h3>
      <p className="line-clamp-3 flex-1 text-sm leading-7 text-text-muted">{project.description}</p>
    </article>
  );
}
