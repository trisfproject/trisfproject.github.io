import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center justify-center pt-16 pb-12 sm:pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-green/10 blur-[100px] opacity-70" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[100px] opacity-60" />
      </div>
      <div className="hero-grid" />
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <h1 className="text-[2.75rem] leading-[1.1] font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Dari ide menjadi<br className="hidden sm:block" /> solusi digital.
          </h1>

          <p className="max-w-[280px] sm:max-w-xl mx-auto text-base font-light text-text-muted sm:text-xl text-balance leading-relaxed px-4 sm:px-0">
            Kami mengembangkan website, aplikasi, dan sistem untuk berbagai kebutuhan bisnis dan operasional Anda.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto px-6 sm:px-0">
            <Link
              to="/projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-text-main px-8 py-3.5 text-sm font-semibold text-bg-site transition duration-300 hover:bg-brand-green hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
            >
              Lihat Project
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-line-site px-8 py-3.5 text-sm font-medium text-text-main transition duration-300 hover:border-brand-green hover:text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
