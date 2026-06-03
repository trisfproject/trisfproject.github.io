import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  const featuredOrder = [
    'Telegram Automation Platform',
    'Infrastructure Monitoring Stack',
    'Global Technindo',
    'XFI - XiaomiHub',
    'REDNECK EV',
    'Nyx Platform',
  ];
  const featuredProjects = featuredOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  return (
    <Container id="projects" className="section-fade py-20 sm:py-24 md:py-32">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <Reveal>
          <SectionHeader
            eyebrow="Featured projects"
            title="Focused engineering work, presented through real projects."
            description="A curated showcase of infrastructure engineering, monitoring systems, automation platforms, web solutions, Android development, and open-source collaboration."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            to="/projects"
            className="mb-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.04] px-5 text-sm font-semibold text-text-main transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#22c55e]/35 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 md:mb-14"
          >
            View All Projects
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </Reveal>
      </div>
      <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04} className="h-full">
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
