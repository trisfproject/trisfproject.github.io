import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-brand-green/[0.04] dark:bg-brand-green/[0.025] border-y border-line-site">
      <Container>
        <Reveal>
          <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col gap-3 sm:gap-4">
            <p className="text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase text-text-muted mb-1">
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
