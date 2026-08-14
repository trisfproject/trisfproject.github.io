import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-surface-strong">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Tentang TRISF
            </h2>
            <p className="text-xl sm:text-2xl leading-relaxed text-text-muted font-light">
              TRISF adalah ruang untuk mengembangkan solusi teknologi yang sederhana, berguna, dan dapat digunakan di dunia nyata.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
