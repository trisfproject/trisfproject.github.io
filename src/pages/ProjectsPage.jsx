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
        title="Project | TRISF"
        description="Jelajahi project dan karya engineering TRISF."
        url="https://trisfproject.github.io/projects"
      />
      <motion.main
        id="main-content"
        className="min-h-[100dvh] pt-28 sm:pt-32 pb-24 bg-bg-site"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container className="mb-16">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl mb-6">
              Project
            </h1>
            <p className="max-w-2xl text-lg text-text-muted">
              Arsip karya dan solusi teknologi yang telah kami kembangkan.
            </p>
          </Reveal>
        </Container>

        <Container>
          <Reveal>
            <div className="mb-8 flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent-site/70 ${
                    activeCategory === category
                      ? 'border-accent-border bg-accent-muted text-accent-site'
                      : 'border-line-site bg-surface text-text-muted hover:border-line-strong hover:text-text-main'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                className="h-full"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.main>
    </>
  );
}
