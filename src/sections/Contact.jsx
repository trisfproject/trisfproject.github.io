import { ArrowRight, Mail } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <Container>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center surface rounded-3xl p-10 sm:p-16 border border-line-site shadow-sm">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Mari Terhubung
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              Punya kebutuhan atau ide yang ingin dikembangkan?
            </p>
            
            <a
              href="mailto:hello@trisf.id"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-site px-8 py-4 text-base font-semibold text-white transition hover:bg-accent-site/90 focus:outline-none focus:ring-2 focus:ring-accent-site/50"
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
