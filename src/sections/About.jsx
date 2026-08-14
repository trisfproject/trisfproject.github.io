import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface-strong">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Tentang TRISF
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-text-muted">
              TRISF adalah ruang untuk mengembangkan solusi teknologi yang sederhana, berguna, dan dapat digunakan di dunia nyata.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
