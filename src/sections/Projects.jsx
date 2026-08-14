import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  const featuredOrder = [
    'NYX',
    'LANGIT RMS',
    'REDNECK EV',
    'E-Voting',
    'Event Management',
    'Telegram Bot',
  ];
  const featuredProjects = featuredOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  const getProjectColors = (project) => {
    if (project.title === 'LANGIT RMS') return { dot: 'bg-brand-green', hover: 'group-hover:text-brand-green' };
    if (project.title === 'NYX') return { dot: 'bg-brand-blue', hover: 'group-hover:text-brand-blue' };
    if (project.title === 'REDNECK EV') return { dot: 'bg-brand-orange', hover: 'group-hover:text-brand-orange' };
    if (project.title === 'E-Voting') return { dot: 'bg-brand-purple', hover: 'group-hover:text-brand-purple' };
    if (project.title === 'Event Management') return { dot: 'bg-brand-amber', hover: 'group-hover:text-brand-amber' };
    if (project.title === 'Telegram Bot') return { dot: 'bg-brand-cyan', hover: 'group-hover:text-brand-cyan' };
    
    if (project.category === 'Software & Open Source') return { dot: 'bg-brand-purple', hover: 'group-hover:text-brand-purple' };
    if (project.category === 'Web & Digital Products') return { dot: 'bg-brand-orange', hover: 'group-hover:text-brand-orange' };
    return { dot: 'bg-brand-blue', hover: 'group-hover:text-brand-blue' };
  };

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl mb-4">
              Project
            </h2>
            <p className="max-w-2xl text-lg text-text-muted">
              Beberapa project yang kami kembangkan untuk berbagai kebutuhan bisnis dan operasional.
            </p>
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
        
        <div className="flex flex-col border-t border-line-site mt-4 md:mt-0">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="group flex flex-col py-5 sm:py-8 border-b border-line-site/50 md:border-line-site hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:gap-24 w-full px-1 sm:px-6">
                  <h3 className={`text-[1.35rem] sm:text-2xl font-bold text-text-main min-w-[200px] shrink-0 flex items-center gap-3 transition-colors duration-300 ${getProjectColors(project).hover}`}>
                    <span className={`size-2 rounded-full ${getProjectColors(project).dot}`} />
                    {project.title}
                  </h3>
                  <p className="mt-1.5 md:mt-0 text-[0.95rem] sm:text-lg text-text-muted leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
