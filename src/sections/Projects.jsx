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
    <Container id="projects" className="py-24 md:py-32">
      <Reveal>
        <SectionHeader
          eyebrow="Featured projects"
          title="Infrastructure, automation, and applied security work."
          description="A compact view of systems-focused projects across cloud-native infrastructure, monitoring, Android builds, workshop operations, and automation."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <article
              {...spotlight}
              className="card-spotlight flex min-h-[320px] flex-col rounded-[24px] border border-white/10 p-6 shadow-2xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-[#22c55e]/35"
            >
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#18181b]/70 px-3 py-1 text-xs font-medium text-[#a1a1aa]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold tracking-normal text-white">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#a1a1aa]">{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
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
