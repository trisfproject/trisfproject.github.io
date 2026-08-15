import { Layout, Server, Smartphone } from 'lucide-react';
import { Container } from '../components/Container.jsx';
import { Reveal } from '../components/Reveal.jsx';

const services = [
  {
    title: 'Web & Digital Products',
    description: 'Website, aplikasi web, dan solusi digital untuk kebutuhan bisnis dan operasional.',
    icon: Layout,
    color: 'text-brand-green',
    hoverColor: 'group-hover:text-brand-green',
    bgAccent: 'bg-brand-green',
  },
  {
    title: 'Infrastructure & Automation',
    description: 'Sistem infrastruktur, monitoring, integrasi, dan otomasi untuk mendukung operasional.',
    icon: Server,
    color: 'text-brand-blue',
    hoverColor: 'group-hover:text-brand-blue',
    bgAccent: 'bg-brand-blue',
  },
  {
    title: 'Software & Open Source',
    description: 'Pengembangan software dan berbagai solusi berbasis teknologi open source.',
    icon: Smartphone,
    color: 'text-brand-purple',
    hoverColor: 'group-hover:text-brand-purple',
    bgAccent: 'bg-brand-purple',
  },
];

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-main">
              Yang Kami Kerjakan
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 lg:gap-10">
          {services.map((service, index) => {
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-line-site bg-surface p-5 sm:p-6 shadow-site transition-all duration-200 ease-out md:rounded-xl md:bg-transparent md:border-transparent md:shadow-none md:hover:bg-surface md:hover:border-line-site md:hover:shadow-site md:hover:-translate-y-[2px] active:scale-[0.98] md:active:scale-100 md:active:translate-y-0">
                  <div className={`absolute top-0 left-0 h-[3px] w-full md:w-0 md:group-hover:w-full transition-all duration-300 ease-out ${service.bgAccent}`} />

                  <span className={`text-xs font-mono font-bold mb-3 ${service.color}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <h3 className={`mb-1.5 text-base sm:text-lg md:text-xl font-bold text-text-main transition-colors duration-200 ${service.hoverColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-[0.9rem] md:text-base text-text-muted leading-relaxed font-light">
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
