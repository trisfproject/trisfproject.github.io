export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-site py-12 bg-surface">
      <div className="section-shell flex flex-col md:flex-row justify-between gap-8 text-sm text-text-muted">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-text-main">TRISF PROJECT</p>
          <p>Solusi digital untuk kebutuhan bisnis dan operasional.</p>
        </div>
        <div className="flex flex-col md:items-end gap-6">
          <div className="flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-text-main focus:outline-none focus:ring-2 focus:ring-line-strong"
            >
              Blog
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-text-main focus:outline-none focus:ring-2 focus:ring-line-strong"
            >
              Telegram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-text-main focus:outline-none focus:ring-2 focus:ring-line-strong"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs">© {year} TRISF PROJECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
