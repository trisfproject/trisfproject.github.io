import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

const roles = [
  'Infrastructure Engineering',
  'Monitoring & Observability',
  'Automation',
  'Cloud Engineering',
  'Android Development',
  'Open Source & Community',
  'Web Solutions',
];

export function About() {
  return (
    <Container id="about" className="section-fade py-20 sm:py-24 md:py-32">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeader eyebrow="About" title="Technical services for reliable systems and delivery." />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[24px] p-5 sm:p-6 md:p-8">
            <p className="text-base leading-8 text-[#d4d4d8] sm:text-lg sm:leading-9">
              TRISF PROJECTS provides infrastructure engineering, monitoring and observability,
              automation, cloud delivery, Android development, and web solutions for teams that need
              practical technical execution. The focus is dependable systems, clear operations, and
              maintainable delivery workflows. Actively supporting open-source ecosystems and modern
              engineering communities, especially around Android and platform development.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-[#050816]/70 px-3.5 py-2 text-sm font-medium text-[#a1a1aa] transition hover:border-[#22c55e]/30 hover:text-white sm:px-4"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
