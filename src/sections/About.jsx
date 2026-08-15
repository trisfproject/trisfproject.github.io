import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-20 bg-brand-green/[0.035] dark:bg-brand-green/[0.02] border-y border-line-site">
      {/* Subtle grid texture in about — connects to hero canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15" style={{
        backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
      }} />

      <Container>
        <Reveal>
          <div className="relative max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col gap-3 sm:gap-4">
            {/* Small accent marker */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-[2px] rounded-full bg-brand-green" />
                <span className="w-1.5 h-[2px] rounded-full bg-brand-green/50" />
              </div>
            </div>

            <p className="text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase text-text-muted">
              Tentang TRISF PROJECT
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-main text-balance leading-tight">
              Teknologi bukan sekadar dibuat. Teknologi harus berguna.
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-text-muted font-light mt-1 md:mt-2 max-w-3xl mx-auto">
              Di TRISF PROJECT, kami membangun solusi digital berdasarkan kebutuhan nyata dan cara solusi tersebut digunakan.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
