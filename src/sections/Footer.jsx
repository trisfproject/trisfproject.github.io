export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex items-center justify-between gap-4 text-xs text-[#a1a1aa] sm:text-sm">
        <p className="min-w-0 truncate">© 2026 TRISF PROJECTS</p>
        <a
          href="#top"
          className="shrink-0 font-medium text-white transition hover:text-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
