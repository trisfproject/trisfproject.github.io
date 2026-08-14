import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-surface-strong">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-text-muted mb-2">
              Tentang TRISF PROJECT
            </h2>
            <p className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Teknologi bukan sekadar dibuat. Teknologi harus berguna.
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed text-text-muted font-light mt-4">
              Di TRISF PROJECT, kami membangun solusi digital berdasarkan kebutuhan nyata dan bagaimana solusi tersebut digunakan.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
