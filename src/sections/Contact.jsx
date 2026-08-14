import { ArrowRight } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[60%] h-[120%] rounded-full bg-brand-blue/10 blur-[80px]" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[60%] h-[120%] rounded-full bg-brand-orange/10 blur-[80px]" />
            </div>
            <div className="text-center flex flex-col items-center gap-4 sm:gap-6 bg-surface border border-line-site rounded-[2rem] sm:rounded-3xl p-8 sm:p-16 shadow-sm transition-colors hover:border-line-strong mx-4 sm:mx-0">
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                MARI TERHUBUNG
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl text-balance leading-tight">
                Ada kebutuhan yang ingin diwujudkan?
              </h2>
              <p className="text-lg text-text-muted max-w-2xl text-balance mb-2">
                Ceritakan kebutuhan Anda. Kami akan membantu memahami kebutuhan tersebut dan mencari solusi yang tepat.
              </p>
              
              <a
                href="mailto:hello@trisf.id"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-text-main px-8 py-3.5 text-sm font-semibold text-bg-site transition duration-300 hover:bg-accent-site hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-site"
              >
                Hubungi Kami
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
