import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container.jsx';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center justify-center pt-24 pb-12 sm:pt-32"
    >
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Solusi teknologi untuk kebutuhan nyata.
          </h1>

          <p className="max-w-2xl text-lg text-text-muted sm:text-xl text-balance">
            Kami membangun website, aplikasi, sistem, dan solusi teknologi yang membantu pekerjaan menjadi lebih sederhana dan efisien.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-site px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-site/90 focus:outline-none focus:ring-2 focus:ring-accent-site/50"
            >
              Lihat Project
              <ArrowRight size={16} />
            </Link>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-site bg-surface px-8 py-3.5 text-sm font-semibold text-text-main transition hover:bg-black/[0.03] dark:hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent-site/50"
            >
              <MessageSquare size={16} className="text-text-muted" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
