import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center justify-center pt-16 pb-12 sm:pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-green/8 dark:bg-brand-green/5 blur-[100px]" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue/8 dark:bg-brand-blue/4 blur-[100px]" />
      </div>
      <div className="hero-grid" />
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          <h1 className="text-[2.25rem] leading-[1.12] font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Dari ide menjadi<br className="hidden sm:block" /> solusi digital.
          </h1>

          <p className="max-w-[300px] sm:max-w-xl mx-auto text-[0.95rem] sm:text-lg md:text-xl font-light text-text-muted text-balance leading-relaxed">
            Kami mengembangkan website, aplikasi, dan sistem untuk berbagai kebutuhan bisnis dan operasional Anda.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/projects"
              className="group/cta inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-text-main px-7 py-3 sm:px-8 sm:py-3.5 text-sm font-semibold text-bg-site transition-all duration-200 ease-out hover:bg-brand-green hover:text-white hover:shadow-[0_4px_16px_-2px_rgba(22,163,74,0.25)] dark:hover:shadow-[0_4px_16px_-2px_rgba(34,197,94,0.2)] focus:outline-none focus:ring-2 focus:ring-brand-green active:scale-[0.97]"
            >
              Lihat Project
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5" />
            </Link>

            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-line-site px-7 py-3 sm:px-8 sm:py-3.5 text-sm font-medium text-text-main transition-all duration-200 ease-out hover:border-brand-green hover:text-brand-green hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-brand-green active:scale-[0.97]"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
