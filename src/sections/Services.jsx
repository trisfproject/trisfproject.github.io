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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 lg:gap-12">
          {services.map((service, index) => {
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="group flex flex-col py-6 md:py-0 border-b border-line-site md:border-b-0 last:border-b-0">
                  <span className="text-sm font-mono font-medium text-text-muted mb-3 md:mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="mb-2 text-xl font-bold text-text-main transition-colors duration-300 group-hover:text-accent-site">
                      {service.title}
                    </h3>
                    <p className="text-base text-text-muted leading-relaxed">
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
