import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center justify-center pt-16 pb-12 sm:pt-32"
    >
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.15]">
            Dari ide menjadi<br className="hidden sm:block" /> solusi digital.
          </h1>

          <p className="max-w-xl text-lg text-text-muted sm:text-xl text-balance leading-relaxed px-4 sm:px-0">
            Kami mengembangkan website, aplikasi, dan sistem untuk berbagai kebutuhan bisnis dan operasional Anda.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link
              to="/projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-text-main px-8 py-3.5 text-sm font-semibold text-bg-site transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-text-main/50"
            >
              Lihat Project
              <ArrowRight size={16} />
            </Link>
            
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-text-muted transition hover:text-text-main focus:outline-none focus:ring-2 focus:ring-line-strong"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
