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
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
              Yang Kami Kerjakan
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {services.map((service, index) => {
            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className="group flex flex-col relative overflow-hidden p-6 md:p-4 lg:p-0 bg-surface md:bg-transparent border border-line-site md:border-transparent rounded-2xl md:rounded-xl lg:rounded-none shadow-sm md:shadow-none transition-all duration-300 md:hover:bg-surface md:hover:border-line-site md:hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] active:scale-[0.98] md:active:scale-100">
                  <div className={`absolute top-0 left-0 w-full h-1 md:w-0 md:group-hover:w-full transition-all duration-500 ${service.bgAccent}`} />
                  
                  <span className={`text-xs md:text-sm font-mono font-bold mb-3 md:mb-4 transition-colors duration-300 text-text-muted ${service.color}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <h3 className={`mb-1.5 md:mb-2 text-[1.15rem] md:text-xl font-bold text-text-main transition-colors duration-300 ${service.hoverColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-[0.9rem] md:text-base text-text-muted leading-relaxed font-light">
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
