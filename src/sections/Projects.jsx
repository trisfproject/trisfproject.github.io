import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';

export function Projects() {
  const featuredOrder = [
    'NYX Monitoring Platform',
    'LANGIT RMS',
    'E-Voting',
    'Event Management',
    'Telegram Bot',
  ];
  const featuredProjects = featuredOrder
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean);

  const getProjectColors = (project) => {
    if (project.title === 'NYX Monitoring Platform') return { dot: 'bg-brand-blue', line: 'bg-brand-blue', hover: 'group-hover:text-brand-blue' };
    if (project.title === 'LANGIT RMS') return { dot: 'bg-brand-green', line: 'bg-brand-green', hover: 'group-hover:text-brand-green' };
    if (project.title === 'REDNECK EV') return { dot: 'bg-brand-orange', line: 'bg-brand-orange', hover: 'group-hover:text-brand-orange' };
    if (project.title === 'E-Voting') return { dot: 'bg-brand-purple', line: 'bg-brand-purple', hover: 'group-hover:text-brand-purple' };
    if (project.title === 'Event Management') return { dot: 'bg-brand-amber', line: 'bg-brand-amber', hover: 'group-hover:text-brand-amber' };
    if (project.title === 'Telegram Bot') return { dot: 'bg-brand-cyan', line: 'bg-brand-cyan', hover: 'group-hover:text-brand-cyan' };

    if (project.category === 'Software & Open Source') return { dot: 'bg-brand-purple', line: 'bg-brand-purple', hover: 'group-hover:text-brand-purple' };
    if (project.category === 'Web & Digital Products') return { dot: 'bg-brand-orange', line: 'bg-brand-orange', hover: 'group-hover:text-brand-orange' };
    return { dot: 'bg-brand-blue', line: 'bg-brand-blue', hover: 'group-hover:text-brand-blue' };
  };

  return (
    <section id="projects" className="relative pt-10 pb-14 sm:py-20">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-[1px] bg-gradient-to-r from-transparent via-line-site to-transparent" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 gap-3 md:gap-6">
          <Reveal>
            <p className="text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase text-accent-site mb-2 sm:mb-3">
              Portfolio
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-main mb-2 sm:mb-3">
              Project
            </h2>
            <p className="text-[0.85rem] sm:text-lg text-text-muted leading-relaxed">
              Beberapa project yang kami kembangkan untuk berbagai kebutuhan bisnis dan operasional.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="group/link inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-text-muted transition-all duration-200 ease-out hover:text-text-main focus:outline-none focus:ring-2 focus:ring-line-strong border border-transparent hover:border-line-site"
            >
              Lihat semua
              <ArrowRight aria-hidden="true" size={15} className="transition-transform duration-200 ease-out group-hover/link:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-2.5 sm:gap-0 sm:border-t sm:border-line-site">
          {featuredProjects.map((project, index) => {
            const colors = getProjectColors(project);
            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <div className="group relative flex items-start gap-3 rounded-xl border border-line-site bg-surface px-4 py-4 shadow-site sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:border-line-site sm:bg-transparent sm:px-5 sm:py-7 sm:shadow-none hover:bg-black/[0.012] dark:hover:bg-white/[0.02] transition-all duration-200 ease-out active:scale-[0.98] sm:active:scale-100">
                  {/* Left accent line — visible on hover on desktop */}
                  <div className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-8 rounded-full transition-all duration-200 ${colors.line}`} />

                  {/* Accent dot */}
                  <span className={`size-2 rounded-full shrink-0 mt-[7px] sm:mt-[10px] ${colors.dot}`} />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-16 md:gap-24 flex-1">
                    <h3 className={`text-[0.95rem] sm:text-xl md:text-2xl font-bold text-text-main min-w-[160px] md:min-w-[200px] sm:shrink-0 transition-colors duration-200 ${colors.hover}`}>
                      {project.title}
                    </h3>
                    <p className="text-[0.8rem] sm:text-[0.95rem] md:text-lg text-text-muted leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
