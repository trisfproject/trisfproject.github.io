import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { techStackGroups } from '../data/techStack.js';

export function TechStack() {
  return (
    <Container id="stack" className="section-fade py-20 sm:py-24 md:py-32">
      <Reveal>
        <SectionHeader
          eyebrow="Tech stack"
          title="Production tools across infrastructure, monitoring, automation, security, and development."
          description="A practical engineering ecosystem for operating systems, shipping applications, automating workflows, and supporting open-source communities."
        />
      </Reveal>
      <div className="grid gap-4 xl:grid-cols-2">
        {techStackGroups.map((group, groupIndex) => {
          const stackId = `${group.category.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}-stack`;

          return (
            <Reveal key={group.category} delay={groupIndex * 0.04} className="h-full">
              <section className="surface h-full rounded-[24px] p-5 sm:p-6" aria-labelledby={stackId}>
                <div className="mb-5">
                  <h3 id={stackId} className="text-xl font-semibold leading-tight text-text-main">
                    {group.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{group.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
                  {group.items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="group flex min-h-28 flex-col justify-between rounded-[20px] border border-line-site bg-black/[0.015] dark:bg-[#050816]/60 p-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#22c55e]/35 hover:bg-surface-strong dark:hover:bg-[#27272a]/55 hover:shadow-hover-site"
                    >
                      <span className="grid size-10 place-items-center rounded-2xl border border-accent-border bg-accent-muted">
                        <Icon
                          className="text-[#16a34a] dark:text-[#22c55e] transition duration-200 group-hover:scale-105"
                          size={22}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-5 text-sm font-semibold leading-tight text-text-main">{name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
