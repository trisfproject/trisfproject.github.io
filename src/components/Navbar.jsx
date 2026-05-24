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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/10 bg-[#050816]/78 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70">
          <span className="grid size-9 place-items-center rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/10 text-sm font-black text-[#22c55e]">
            T
          </span>
          <span className="text-sm font-bold tracking-[0.18em] text-white">TRISF PROJECTS</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#a1a1aa] transition hover:bg-white/[0.04] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
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
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a1a1aa] transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.trisf.my.id/"
            target="_blank"
            rel="noreferrer"
            aria-label="Website"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#a1a1aa] transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-4 md:hidden">
          <div className="rounded-3xl border border-white/10 bg-[#18181b]/90 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#a1a1aa] transition hover:bg-white/[0.05] hover:text-white"
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
