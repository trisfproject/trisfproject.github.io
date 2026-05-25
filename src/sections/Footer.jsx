export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-[#a1a1aa] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 TRISF PROJECTS</p>
        <a
          href="#top"
          className="self-end font-medium text-white transition hover:text-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 sm:self-auto"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
