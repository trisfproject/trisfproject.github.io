import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-surface/50 backdrop-blur-sm border-y border-line-site">
      <Container>
        <Reveal>
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-1">
              Tentang TRISF PROJECT
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl text-balance">
              Teknologi bukan sekadar dibuat. Teknologi harus berguna.
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-text-muted font-light mt-2 max-w-3xl mx-auto">
              Di TRISF PROJECT, kami membangun solusi digital berdasarkan kebutuhan nyata dan cara solusi tersebut digunakan.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
