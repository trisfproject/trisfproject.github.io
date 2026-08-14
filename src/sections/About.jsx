import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-surface-strong">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-1">
              Tentang TRISF PROJECT
            </h2>
            <p className="text-2xl font-bold tracking-tight text-text-main sm:text-3xl">
              Teknologi bukan sekadar dibuat. Teknologi harus berguna.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-text-muted font-light mt-2">
              Di TRISF PROJECT, kami membangun solusi digital berdasarkan kebutuhan nyata dan bagaimana solusi tersebut digunakan.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
