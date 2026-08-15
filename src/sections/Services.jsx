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
    glowColor: 'bg-brand-green/6 dark:bg-brand-green/4',
  },
  {
    title: 'Infrastructure & Automation',
    description: 'Sistem infrastruktur, monitoring, integrasi, dan otomasi untuk mendukung operasional.',
    icon: Server,
    color: 'text-brand-blue',
    hoverColor: 'group-hover:text-brand-blue',
    bgAccent: 'bg-brand-blue',
    glowColor: 'bg-brand-blue/6 dark:bg-brand-blue/4',
  },
  {
    title: 'Software & Open Source',
    description: 'Pengembangan software dan berbagai solusi berbasis teknologi open source.',
    icon: Smartphone,
    color: 'text-brand-purple',
    hoverColor: 'group-hover:text-brand-purple',
    bgAccent: 'bg-brand-purple',
    glowColor: 'bg-brand-purple/6 dark:bg-brand-purple/4',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-20">
      {/* Subtle top separator — fading line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-md h-[1px] bg-gradient-to-r from-transparent via-line-site to-transparent" />

      <Container>
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase text-accent-site mb-3">
              Layanan
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-main">
              Yang Kami Kerjakan
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-line-site bg-surface p-5 sm:p-6 shadow-site transition-all duration-200 ease-out md:rounded-xl md:bg-transparent md:border-transparent md:shadow-none md:hover:bg-surface md:hover:border-line-site md:hover:shadow-site md:hover:-translate-y-[2px] active:scale-[0.98] md:active:scale-100 md:active:translate-y-0">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 h-[2px] w-full md:w-0 md:group-hover:w-full transition-all duration-300 ease-out ${service.bgAccent}`} />

                  {/* Subtle glow on hover */}
                  <div className={`absolute -top-8 -right-8 size-24 rounded-full blur-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${service.glowColor}`} />

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`grid size-8 place-items-center rounded-lg bg-surface-strong border border-line-site transition-colors duration-200 ${service.color}`}>
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <span className={`text-xs font-mono font-bold ${service.color}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
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
