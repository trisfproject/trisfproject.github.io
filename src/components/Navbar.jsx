import { ExternalLink, Github, Menu, Sun, Moon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
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
    const sectionIds = ['top', 'about', 'projects', 'contact'];

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
    setOpen(false);
  }, [location.pathname, location.hash]);

  const isItemActive = (item) => {
    if (item.to === '/projects') {
      return location.pathname === '/projects' || (location.pathname === '/' && activeSection === 'projects');
    }
    if (item.to === '/#about') return location.pathname === '/' && activeSection === 'about';
    if (item.to === '/#contact') return location.pathname === '/' && activeSection === 'contact';
    return location.pathname === '/' && activeSection === 'top';
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${scrolled || open
          ? 'border-b border-line-site bg-bg-site/82 shadow-site backdrop-blur-2xl supports-[backdrop-filter]:bg-bg-site/72'
          : 'border-b border-transparent bg-transparent'
        }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between sm:h-[72px]">
        <Link
          to="/"
          className="inline-flex min-w-0 items-center rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/8 dark:bg-[#22c55e]/10 px-3.5 py-2 text-[0.68rem] font-bold tracking-[0.16em] text-text-main dark:text-white transition duration-200 hover:border-[#22c55e]/35 hover:bg-[#22c55e]/12 dark:hover:bg-[#22c55e]/14 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 sm:px-4 sm:text-xs"
        >
          TRISF PROJECTS
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              aria-current={isItemActive(item) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 ${isItemActive(item)
                  ? 'bg-[#22c55e]/12 text-text-main dark:text-white shadow-[inset_0_0_0_1px_rgba(34,197,94,0.24)]'
                  : 'text-text-muted hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:text-text-main'
                }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="grid size-10 place-items-center rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.04] text-text-muted transition duration-200 hover:-translate-y-0.5 hover:border-[#22c55e]/30 hover:text-text-main focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 cursor-pointer"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="https://github.com/trisfproject"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.04] text-text-muted transition duration-200 hover:-translate-y-0.5 hover:border-[#22c55e]/30 hover:text-text-main focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
          >
            <Github size={18} />
          </a>
          <a
            href="https://trisf.my.id/"
            target="_blank"
            rel="noreferrer"
            aria-label="Website"
            className="grid size-10 place-items-center rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.04] text-text-muted transition duration-200 hover:-translate-y-0.5 hover:border-[#22c55e]/30 hover:text-text-main focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Mobile menu trigger and theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="grid size-10 place-items-center rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.04] text-text-muted transition duration-200 hover:border-[#22c55e]/30 hover:text-text-main focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 cursor-pointer"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line-site bg-black/[0.03] dark:bg-white/[0.04] text-text-main transition hover:border-[#22c55e]/30 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="section-shell pb-4 md:hidden">
          <div className="rounded-[24px] border border-line-site bg-surface-site/92 p-2 shadow-site backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-current={isItemActive(item) ? 'page' : undefined}
                className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 ${isItemActive(item)
                    ? 'bg-[#22c55e]/12 text-text-main dark:text-white'
                    : 'text-text-muted hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-text-main'
                  }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
