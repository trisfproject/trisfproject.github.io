import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/Button.jsx';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';
import { useSpotlight } from '../hooks/useSpotlight.js';

export function Projects() {
  const spotlight = useSpotlight();

  return (
    <Container id="projects" className="section-fade py-20 sm:py-24 md:py-32">
      <Reveal>
        <SectionHeader
          eyebrow="Featured projects"
          title="Production-minded systems, automation, and platform work."
          description="Infrastructure-focused projects across Kubernetes, monitoring, cloud automation, DevSecOps, Android builds, web delivery, and operational alerting."
        />
      </Reveal>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <article
              {...spotlight}
              className="card-spotlight group flex min-h-[300px] flex-col rounded-[24px] border border-white/10 p-5 shadow-2xl shadow-black/10 transition duration-200 ease-out hover:-translate-y-1 hover:border-[#22c55e]/35 hover:shadow-[#22c55e]/[0.035] sm:min-h-[320px] sm:p-6"
            >
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
                    Live
                  </Button>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
