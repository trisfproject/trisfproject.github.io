import { ArrowRight } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function Contact() {
  return (
    <section id="contact" className="relative pt-12 pb-6 sm:py-24">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] max-w-xs h-[1px] bg-gradient-to-r from-transparent via-line-site to-transparent" />

      <Container>
        <Reveal>
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Ambient color glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[60%] h-[120%] rounded-full bg-brand-blue/6 dark:bg-brand-blue/3 blur-[80px]" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[60%] h-[120%] rounded-full bg-brand-orange/6 dark:bg-brand-orange/3 blur-[80px]" />
            </div>

            <div className="relative text-center flex flex-col items-center gap-4 sm:gap-5 bg-surface border border-line-site rounded-2xl sm:rounded-3xl px-5 py-8 sm:p-12 md:p-16 shadow-site transition-colors duration-200 hover:border-line-strong overflow-hidden">
              {/* Subtle corner accents */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-3 h-[1px] bg-brand-blue/25 dark:bg-brand-blue/15" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-[1px] h-3 bg-brand-blue/25 dark:bg-brand-blue/15" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-3 h-[1px] bg-brand-orange/25 dark:bg-brand-orange/15" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-[1px] h-3 bg-brand-orange/25 dark:bg-brand-orange/15" />

              <p className="text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase text-text-muted">
                MARI TERHUBUNG
              </p>

              <h2 className="text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-main text-balance leading-[1.3] sm:leading-tight">
                Ada kebutuhan yang ingin diwujudkan?
              </h2>

              <p className="text-[0.85rem] sm:text-base md:text-lg text-text-muted max-w-2xl text-balance leading-relaxed">
                Ceritakan kebutuhan Anda. Kami akan membantu memahami kebutuhan tersebut dan mencari solusi yang tepat.
              </p>

              <a
                href="mailto:hello@trisf.id"
                className="group/cta inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-text-main mt-2 px-7 py-3.5 sm:px-8 sm:py-3.5 text-sm font-semibold text-bg-site transition-all duration-200 ease-out hover:bg-accent-site hover:text-white hover:shadow-[0_4px_16px_-2px_rgba(22,163,74,0.25)] dark:hover:shadow-[0_4px_16px_-2px_rgba(34,197,94,0.2)] focus:outline-none focus:ring-2 focus:ring-accent-site active:scale-[0.97]"
              >
                Hubungi Kami
                <ArrowRight size={16} className="transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
