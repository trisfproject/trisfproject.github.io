export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-site py-8 bg-surface">
      <div className="section-shell flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p className="min-w-0 truncate">© {year} TRISF</p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent-site focus:outline-none focus:ring-2 focus:ring-accent-site/70"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent-site focus:outline-none focus:ring-2 focus:ring-accent-site/70"
          >
            Telegram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent-site focus:outline-none focus:ring-2 focus:ring-accent-site/70"
          >
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}
