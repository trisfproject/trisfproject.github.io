import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/Container.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SEO } from '../components/SEO.jsx';
import { projectCategories, projects } from '../data/projects.js';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = useMemo(
    () => {
      const visibleProjects =
        activeCategory === 'All'
          ? projects
          : projects.filter((project) => project.category === activeCategory);

      return [...visibleProjects].sort((a, b) => a.title.localeCompare(b.title));
    },
    [activeCategory],
  );

  return (
    <>
      <SEO
        title="Projects | TRISF PROJECTS"
        description="Explore TRISF PROJECTS engineering work across infrastructure, monitoring, automation, CI/CD, security, Android, open-source, and web solutions."
        url="https://trisfproject.github.io/projects"
      />
      <main id="main-content" className="min-h-screen pt-28 sm:pt-32">
        <Container className="pb-12 pt-10 sm:pb-14 md:pt-16" as="section">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#22c55e]">
              Project archive
            </p>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.46fr] lg:items-end">
              <div>
                <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Engineering archive for production-focused technical work.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[#a1a1aa] sm:text-lg sm:leading-8">
                  A clean archive of infrastructure systems, monitoring platforms, automation tools,
                  security workflows, Android and open-source contributions, and web solutions from
                  TRISF PROJECTS.
                </p>
              </div>
              <div className="surface rounded-[24px] p-5">
                <p className="text-sm font-semibold text-white">{filteredProjects.length} projects</p>
                <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">
                  Filter by category to scan the work by engineering area.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>

        <Container className="pb-24 md:pb-32" as="section">
          <Reveal>
            <div className="mb-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 ${
                    activeCategory === category
                      ? 'border-[#22c55e]/35 bg-[#22c55e]/14 text-white'
                      : 'border-white/10 bg-white/[0.04] text-[#a1a1aa] hover:border-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                className="h-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </main>
    </>
  );
}
