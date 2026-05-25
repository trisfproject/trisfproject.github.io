import { Github, Mail, Send } from 'lucide-react';
import { Button } from '../components/Button.jsx';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <Container id="contact" className="section-fade py-20 sm:py-24 md:py-32">
      <Reveal>
        <div className="surface rounded-[24px] p-5 sm:p-7 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#22c55e]">Contact</p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl">
                Have a project, idea, or technical discussion? Let&apos;s connect.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#a1a1aa] md:leading-8">
                Open for project discussions, collaboration, infrastructure solutions, and technical consultation.
              </p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 md:flex md:flex-col">
              <Button href="https://github.com/trisfproject" icon={Github} variant="secondary">
                GitHub
              </Button>
              <Button href="mailto:trisfproject@gmail.com" icon={Mail} variant="secondary">
                Email
              </Button>
              <Button href="https://t.me/trisf" icon={Send} variant="secondary">
                Telegram
              </Button>
              <Button href="https://t.me/trisfproject" icon={Send} variant="secondary">
                Channel
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
