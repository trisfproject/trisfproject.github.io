import { ArrowRight, Mail } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <section id="contact" className="py-32 sm:py-40 bg-surface">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-10">
            <h2 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl text-balance leading-tight">
              Punya ide yang ingin dikembangkan?
            </h2>
            
            <a
              href="mailto:hello@trisf.id"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-main px-8 py-4 text-base font-semibold text-bg-site transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-text-main/50"
            >
              <Mail size={18} />
              Mari ngobrol
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
