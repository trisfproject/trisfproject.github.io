import { Layout, Server, Smartphone } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

const services = [
  {
    title: 'Web & Digital Products',
    description: 'Website, aplikasi web, dan solusi digital untuk berbagai kebutuhan.',
    icon: Layout,
  },
  {
    title: 'Infrastructure & Automation',
    description: 'Infrastruktur, monitoring, otomasi, dan sistem pendukung operasional.',
    icon: Server,
  },
  {
    title: 'Android & Open Source',
    description: 'Pengembangan aplikasi, sistem, dan berbagai project berbasis open source.',
    icon: Smartphone,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Yang Kami Kerjakan
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-surface border border-line-site shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-muted text-accent-site">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-text-main">
                    {service.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
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
