import { ArrowRight, Mail } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <section id="contact" className="py-32 sm:py-40 bg-surface">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-text-muted mb-2">
              Mari Terhubung
            </h2>
            <p className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl text-balance leading-tight">
              Punya kebutuhan digital yang ingin dikembangkan?
            </p>
            <p className="text-lg text-text-muted max-w-2xl text-balance mb-4">
              Ceritakan kebutuhan Anda. Kami akan membantu mencari dan membangun solusi yang tepat.
            </p>
            
            <a
              href="mailto:hello@trisf.id"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-main px-8 py-4 text-base font-semibold text-bg-site transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-text-main/50"
            >
              Hubungi Kami
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
