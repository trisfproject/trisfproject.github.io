import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  const featuredOrder = [
    'NYX',
    'LANGIT RMS',
    'Sewa AC Cikarang',
    'REDNECK EV',
    'E-Voting',
    'Cron Dashboard',
  ];
  const featuredProjects = featuredOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Project
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-site bg-surface px-6 py-2.5 text-sm font-semibold text-text-main transition hover:bg-black/[0.03] dark:hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent-site/50"
            >
              Lihat semua project
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </Reveal>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
