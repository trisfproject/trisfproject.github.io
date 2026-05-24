import { ExternalLink, Github } from 'lucide-react';
import { Button } from './Button.jsx';
import { useSpotlight } from '../hooks/useSpotlight.js';

export function ProjectCard({ project, compact = false }) {
  const spotlight = useSpotlight();

  return (
    <article
      {...spotlight}
      className={`card-spotlight group flex flex-col rounded-[24px] border border-white/10 p-5 shadow-2xl shadow-black/10 transition duration-200 ease-out hover:-translate-y-1 hover:border-[#22c55e]/35 hover:shadow-[#22c55e]/[0.035] sm:p-6 ${
        compact ? 'min-h-[300px] sm:min-h-[320px]' : 'min-h-[310px]'
      }`}
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[#22c55e]/20 bg-[#22c55e]/10 px-3 py-1 text-xs font-semibold text-[#22c55e]">
          {project.category}
        </span>
        {project.tags.slice(0, compact ? 3 : 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-[#18181b]/70 px-3 py-1 text-xs font-medium text-[#a1a1aa] transition group-hover:border-white/15 group-hover:text-[#d4d4d8]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-[1.35rem] font-semibold leading-tight tracking-normal text-white sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#a1a1aa]">{project.description}</p>
      <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
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
