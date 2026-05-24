import { ExternalLink, Github, Mail } from 'lucide-react';
import { Button } from '../components/Button.jsx';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <Container id="contact" className="py-24 md:py-32">
      <Reveal>
        <div className="rounded-[24px] border border-white/10 bg-[#18181b]/60 p-7 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#22c55e]">Contact</p>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
                Let&apos;s connect around infrastructure, security, or automation.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#a1a1aa]">
                Open for technical collaboration, project discussions, and practical engineering work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button href="https://github.com/trisfproject" icon={Github} variant="secondary">
                GitHub
              </Button>
              <Button href="mailto:contact@trisf.my.id" icon={Mail} variant="secondary">
                Email
              </Button>
              <Button href="https://www.trisf.my.id/" icon={ExternalLink} variant="secondary">
                Website
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
