import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <Container id="projects" className="section-fade py-20 sm:py-24 md:py-32">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <Reveal>
          <SectionHeader
            eyebrow="Featured projects"
            title="Focused engineering work, presented through real projects."
            description="A curated showcase of business websites, EV service platforms, Android ROM development, open-source collaboration, and monitoring infrastructure."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            to="/projects"
            className="mb-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#22c55e]/35 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 md:mb-14"
          >
            View All Projects
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </Reveal>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
