import { ArrowRight } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-surface">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-text-muted">
              MARI TERHUBUNG
            </h2>
            <p className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl text-balance leading-tight">
              Punya kebutuhan digital yang ingin diwujudkan?
            </p>
            <p className="text-lg text-text-muted max-w-2xl text-balance mb-2">
              Ceritakan kebutuhan Anda. Kami akan membantu memahami kebutuhan tersebut dan mencari solusi yang tepat.
            </p>
            
            <a
              href="mailto:hello@trisf.id"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-main px-8 py-3.5 text-sm font-semibold text-bg-site transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-text-main/50"
            >
              Hubungi Kami
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
