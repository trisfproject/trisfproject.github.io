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

        <div className="grid gap-12 md:gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="flex flex-col">
                  <div className="mb-5 flex items-center text-text-main">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-text-main">
                    {service.title}
                  </h3>
                  <p className="text-lg text-text-muted leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
