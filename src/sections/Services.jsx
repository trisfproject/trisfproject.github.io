import { Layout, Server, Smartphone } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

const services = [
  {
    title: 'Web & Digital Products',
    description: 'Website, aplikasi web, dan solusi digital untuk kebutuhan bisnis dan operasional.',
    icon: Layout,
  },
  {
    title: 'Infrastructure & Automation',
    description: 'Sistem infrastruktur, monitoring, integrasi, dan otomasi untuk mendukung operasional.',
    icon: Server,
  },
  {
    title: 'Software & Open Source',
    description: 'Pengembangan software dan berbagai solusi berbasis teknologi open source.',
    icon: Smartphone,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Yang Kami Kerjakan
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col border-t border-line-site">
          {services.map((service, index) => {
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="group flex flex-col md:flex-row py-8 border-b border-line-site gap-2 md:gap-12 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors duration-300">
                  <span className="text-sm font-mono font-medium text-text-muted md:w-16 md:pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col flex-1">
                    <h3 className="mb-2 text-xl md:text-2xl font-semibold text-text-main">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
