import { ExternalLink, Github, Menu, X } from 'lucide-react';
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

    const targets = ['top', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: [0.08, 0.18, 0.32],
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const isItemActive = (item) => {
    if (item.to === '/projects') return location.pathname === '/projects';
    if (item.to === '/#about') return location.pathname === '/' && activeSection === 'about';
    if (item.to === '/#contact') return location.pathname === '/' && activeSection === 'contact';
    return location.pathname === '/' && activeSection === 'top';
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-[#050816]/82 shadow-[0_18px_60px_rgb(0_0_0/0.24)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#050816]/72'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between sm:h-[72px]">
        <Link
          to="/"
          className="flex min-w-0 items-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 sm:gap-3"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/10 text-sm font-black text-[#22c55e]">
            T
          </span>
          <span className="hidden truncate text-xs font-bold tracking-[0.18em] text-white sm:inline sm:text-sm">
            TRISF PROJECTS
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              aria-current={isItemActive(item) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 ${
                isItemActive(item)
                  ? 'bg-[#22c55e]/12 text-white shadow-[inset_0_0_0_1px_rgb(34_197_94/0.2)]'
                  : 'text-[#a1a1aa] hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/trisfproject"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a1a1aa] transition duration-200 hover:-translate-y-0.5 hover:border-[#22c55e]/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.trisf.my.id/"
            target="_blank"
            rel="noreferrer"
            aria-label="Website"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a1a1aa] transition duration-200 hover:-translate-y-0.5 hover:border-[#22c55e]/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#22c55e]/30 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="section-shell pb-4 md:hidden">
          <div className="rounded-[24px] border border-white/10 bg-[#18181b]/92 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-current={isItemActive(item) ? 'page' : undefined}
                className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 ${
                  isItemActive(item)
                    ? 'bg-[#22c55e]/12 text-white'
                    : 'text-[#a1a1aa] hover:bg-white/[0.06] hover:text-white'
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
