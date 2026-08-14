import { Home, LayoutGrid, Folder, Info, Phone, Sun, Moon, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Beranda', to: '/', icon: Home },
  { label: 'Layanan', to: '/#services', icon: LayoutGrid },
  { label: 'Project', to: '/projects', icon: Folder },
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
    if (item.to === '/projects') {
      return location.pathname === '/projects' || (location.pathname === '/' && activeSection === 'projects');
    }
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
      <nav className="section-shell flex h-16 items-center justify-between sm:h-[72px]">
        <Link
          to="/"
          className="inline-flex min-w-0 items-center rounded-full bg-surface px-4 py-2 text-sm font-bold tracking-widest text-text-main transition duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-accent-site"
        >
          TRISF PROJECT
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              aria-current={isItemActive(item) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent-site ${
                isItemActive(item)
                  ? 'bg-accent-muted text-accent-site'
                  : 'text-text-muted hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:text-text-main'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://trisf.my.id/"
            aria-label="Main Web"
            title="Main Web"
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-10 place-items-center rounded-full bg-surface text-text-muted transition duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site cursor-pointer"
          >
            <ExternalLink size={18} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="grid size-10 place-items-center rounded-full bg-surface text-text-muted transition duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site cursor-pointer"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile menu trigger and theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://trisf.my.id/"
            aria-label="Main Web"
            title="Main Web"
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-10 place-items-center rounded-full bg-surface text-text-muted transition duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site cursor-pointer"
          >
            <ExternalLink size={18} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="grid size-10 place-items-center rounded-full bg-surface text-text-muted transition duration-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-text-main focus:outline-none focus:ring-2 focus:ring-accent-site cursor-pointer"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Floating Navigation */}
    <nav
      className="md:hidden fixed left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-1 rounded-[2rem] border border-line-site bg-surface/90 px-3 py-2 shadow-site backdrop-blur-2xl supports-[backdrop-filter]:bg-surface/80"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isItemActive(item);
        return (
          <NavLink
            key={item.to}
            to={item.to}
            aria-current={active ? 'page' : undefined}
            className={`flex flex-1 min-w-[3.5rem] flex-col items-center justify-center gap-1 rounded-2xl p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-site ${
              active
                ? 'text-accent-site'
                : 'text-text-muted hover:text-text-main'
            }`}
          >
            <div className={`grid size-8 place-items-center rounded-full transition-colors ${active ? 'bg-accent-muted' : 'bg-transparent'}`}>
              <Icon size={18} strokeWidth={active ? 2.5 : 2} />
            </div>
            <span className={`text-[9px] font-medium leading-none ${active ? 'font-semibold' : ''}`}>
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
    </>
  );
}

