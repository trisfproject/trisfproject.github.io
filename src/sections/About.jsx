import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

const roles = ['SysAdmin', 'DevOps', 'Infrastructure Engineer', 'Security Enthusiast', 'Android Custom ROM Contributor', 'EV Workshop Builder'];

export function About() {
  return (
    <Container id="about" className="section-fade py-20 sm:py-24 md:py-32">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeader eyebrow="About" title="Engineering with a systems-first mindset." />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface rounded-[24px] p-5 sm:p-6 md:p-8">
            <p className="text-base leading-8 text-[#d4d4d8] sm:text-lg sm:leading-9">
              TRISF PROJECTS brings together infrastructure operations, secure deployment workflows,
              Android platform contribution, automation, and practical workshop systems. The focus is
              simple: build dependable tools, harden the environment around them, and automate the work
              that should not be repeated manually.
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
