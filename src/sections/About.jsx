import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

const roles = ['SysAdmin', 'DevOps', 'Infrastructure Engineer', 'Security Enthusiast', 'Android Custom ROM Contributor', 'EV Workshop Builder'];

export function About() {
  return (
    <Container id="about" className="py-24 md:py-32">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeader eyebrow="About" title="Engineering with a systems-first mindset." />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-[24px] border border-white/10 bg-[#18181b]/55 p-6 md:p-8">
            <p className="text-lg leading-9 text-[#d4d4d8]">
              TRISF PROJECTS brings together infrastructure operations, secure deployment workflows,
              Android platform contribution, automation, and practical workshop systems. The focus is
              simple: build dependable tools, harden the environment around them, and automate the work
              that should not be repeated manually.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-[#050816]/70 px-4 py-2 text-sm font-medium text-[#a1a1aa]"
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
