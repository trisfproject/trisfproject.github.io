import { ExternalLink, Github, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-[#050816]/82 shadow-[0_18px_60px_rgb(0_0_0/0.24)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#050816]/72'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between sm:h-[72px]">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/10 text-sm font-black text-[#22c55e]">
            T
          </span>
          <span className="truncate text-xs font-bold tracking-[0.18em] text-white sm:text-sm">
            TRISF PROJECTS
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#a1a1aa] transition duration-200 hover:bg-white/[0.05] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
            >
              {item.label}
            </a>
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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#a1a1aa] transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
