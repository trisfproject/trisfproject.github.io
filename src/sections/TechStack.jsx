import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { techStack } from '../data/techStack.js';

export function TechStack() {
  return (
    <Container id="stack" className="section-fade py-20 sm:py-24 md:py-32">
      <Reveal>
        <SectionHeader
          eyebrow="Tech stack"
          title="Tools selected for reliable systems and fast delivery."
          description="A practical stack for building, shipping, monitoring, and protecting production infrastructure."
        />
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {techStack.map(({ name, icon: Icon }, index) => (
          <Reveal key={name} delay={index * 0.03}>
            <div className="group flex min-h-28 flex-col justify-between rounded-[24px] border border-white/10 bg-[#18181b]/55 p-4 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#22c55e]/35 hover:bg-[#27272a]/70 sm:min-h-32 sm:p-5">
              <Icon className="text-[#22c55e] transition duration-200 group-hover:scale-105" size={26} strokeWidth={1.8} />
              <span className="mt-6 text-sm font-semibold leading-tight text-white">{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
