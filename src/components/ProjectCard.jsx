import { useSpotlight } from '../hooks/useSpotlight.js';

export function ProjectCard({ project }) {
  const spotlight = useSpotlight();

  // Determine accent color per project category
  const getCategoryAccent = () => {
    if (project.category === 'Web & Digital Products') return 'border-brand-green/20 group-hover:border-brand-green/35';
    if (project.category === 'Infrastructure & Automation') return 'border-brand-blue/20 group-hover:border-brand-blue/35';
    if (project.category === 'Software & Open Source') return 'border-brand-purple/20 group-hover:border-brand-purple/35';
    return 'border-accent-site/20 group-hover:border-accent-site/35';
  };

  return (
    <article
      {...spotlight}
      className={`card-spotlight group relative flex h-full flex-col rounded-2xl border bg-surface p-5 shadow-site transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-hover-site active:scale-[0.98] active:translate-y-0 sm:p-6 ${getCategoryAccent()}`}
    >
      {/* Top accent line per category */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-accent-site/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="mb-4 flex flex-wrap items-start gap-1.5 sm:gap-2">
        <span className="rounded-full border border-accent-border bg-accent-muted px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.7rem] sm:text-xs font-semibold text-accent-site transition-colors duration-200 group-hover:bg-accent-site/12">
          {project.category}
        </span>
        {project.type ? (
          <span className="rounded-full border border-line-site bg-surface-strong px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.7rem] sm:text-xs font-medium text-text-secondary">
            {project.type}
          </span>
        ) : null}
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line-site bg-surface-strong px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.7rem] sm:text-xs font-medium text-text-muted transition-colors duration-200 group-hover:border-line-strong group-hover:text-text-main"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-normal text-text-main">
        {project.title}
      </h3>
      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
    </article>
  );
}
