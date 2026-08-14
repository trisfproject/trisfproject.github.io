import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  const featuredOrder = [
    'NYX',
    'LANGIT RMS',
    'REDNECK EV',
    'Cron Dashboard',
  ];
  const featuredProjects = featuredOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Project
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-text-muted transition hover:text-text-main focus:outline-none focus:ring-2 focus:ring-line-strong border border-transparent hover:border-line-site"
            >
              Lihat semua project
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </Reveal>
        </div>
        
        <div className="flex flex-col border-t border-line-site">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-line-site gap-4">
                <div className="flex flex-col max-w-2xl">
                  <h3 className="text-xl font-semibold text-text-main group-hover:text-text-main/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="shrink-0 pt-2 sm:pt-0">
                  <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line-site px-4 py-1.5 text-xs font-medium text-text-muted group-hover:bg-black/[0.02] dark:group-hover:bg-white/[0.02] transition">
                    {project.category}
                    <ArrowUpRight size={14} className="opacity-40" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
