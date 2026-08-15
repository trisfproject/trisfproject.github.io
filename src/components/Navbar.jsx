import { Home, LayoutGrid, Folder, Info, Phone, Sun, Moon, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Beranda', to: '/', icon: Home },
  { label: 'Layanan', to: '/#services', icon: LayoutGrid },
  { label: 'Project', to: '/#projects', icon: Folder },
  { label: 'Tentang', to: '/#about', icon: Info },
  { label: 'Kontak', to: '/#contact', icon: Phone },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;

    let frame = 0;
    const sectionIds = ['top', 'services', 'projects', 'about', 'contact'];

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const readingLine = window.innerHeight * 0.42;
      const containingSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= readingLine && rect.bottom >= readingLine;
      });

      const active =
        containingSection ??
        sections
          .map((section) => {
            const rect = section.getBoundingClientRect();
            return {
              distance: Math.abs(rect.top + rect.height * 0.35 - readingLine),
              section,
            };
          })
          .sort((a, b) => a.distance - b.distance)[0]?.section;

      if (active?.id) {
        setActiveSection((current) => (current === active.id ? current : active.id));
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateActiveSection();
        frame = 0;
      });
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  useEffect(() => {
    // Close mobile nav listener removed
  }, [location.pathname, location.hash]);

  const isItemActive = (item) => {
    if (item.to === '/#projects') return location.pathname === '/' && activeSection === 'projects';
    if (item.to === '/#services') return location.pathname === '/' && activeSection === 'services';
    if (item.to === '/#about') return location.pathname === '/' && activeSection === 'about';
    if (item.to === '/#contact') return location.pathname === '/' && activeSection === 'contact';
    return location.pathname === '/' && activeSection === 'top';
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled
            ? 'border-b border-line-site bg-bg-site/90 shadow-site backdrop-blur-2xl supports-[backdrop-filter]:bg-bg-site/80'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="section-shell flex h-14 items-center justify-between sm:h-16 md:h-[72px]">
          <Link
            to="/"
            className="inline-flex min-w-0 items-center rounded-full bg-surface border border-line-site px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-widest text-text-main transition duration-200 hover:border-line-strong focus:outline-none focus:ring-2 focus:ring-accent-site"
          >
            TRISF PROJECT
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-current={isItemActive(item) ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent-site ${
                  isItemActive(item)
                    ? 'bg-accent-muted text-accent-site'
                    : 'text-text-muted hover:bg-surface-strong hover:text-text-main'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-1.5 md:flex">
            <a
              href="https://trisf.my.id/"
              aria-label="Main Web"
              title="Main Web"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 place-items-center rounded-full text-text-muted transition duration-200 hover:bg-surface-strong hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site"
            >
              <ExternalLink size={16} />
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              className="grid size-9 place-items-center rounded-full text-text-muted transition duration-200 hover:bg-surface-strong hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site cursor-pointer"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile header actions */}
          <div className="flex items-center gap-1 md:hidden">
            <a
              href="https://trisf.my.id/"
              aria-label="Main Web"
              title="Main Web"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 place-items-center rounded-full text-text-muted transition duration-200 hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site"
            >
              <ExternalLink size={16} />
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              className="grid size-9 place-items-center rounded-full text-text-muted transition duration-200 hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site cursor-pointer"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Floating Bottom Navigation */}
      <nav
        className="md:hidden fixed left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-0.5 rounded-full border border-line-site bg-surface/95 px-2 py-1.5 shadow-site backdrop-blur-xl supports-[backdrop-filter]:bg-surface/85"
        style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isItemActive(item);
          return (
            <NavLink
              key={item.to}
              to={item.to}
              aria-current={active ? 'page' : undefined}
              className={`flex min-w-[3rem] flex-col items-center justify-center gap-0.5 rounded-full px-2 py-1.5 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brand-green ${
                active
                  ? 'text-brand-green'
                  : 'text-text-muted'
              }`}
            >
              <div className={`grid size-6 place-items-center rounded-full transition-all duration-200 ease-out ${active ? 'bg-brand-green/10' : ''}`}>
                <Icon size={16} strokeWidth={active ? 2.2 : 1.5} />
              </div>
              <span className={`text-[8px] leading-none ${active ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
