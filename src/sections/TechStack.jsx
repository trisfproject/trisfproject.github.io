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
          title="Tools used to design, operate, and ship technical solutions."
          description="Grouped by service area: platform foundations, monitoring and observability, cloud automation, and application development."
        />
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-2">
        {techStackGroups.map((group, groupIndex) => {
          const stackId = `${group.category.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}-stack`;

          return (
            <Reveal key={group.category} delay={groupIndex * 0.05}>
              <section className="surface rounded-[24px] p-5 sm:p-6" aria-labelledby={stackId}>
                <div className="mb-5">
                  <h3 id={stackId} className="text-xl font-semibold leading-tight text-white">
                    {group.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#a1a1aa]">{group.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="group flex min-h-28 flex-col justify-between rounded-[20px] border border-white/10 bg-[#050816]/60 p-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#22c55e]/35 hover:bg-[#27272a]/55"
                    >
                      <span className="grid size-10 place-items-center rounded-2xl border border-[#22c55e]/20 bg-[#22c55e]/10">
                        <Icon
                          className="text-[#22c55e] transition duration-200 group-hover:scale-105"
                          size={22}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-5 text-sm font-semibold leading-tight text-white">{name}</span>
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
