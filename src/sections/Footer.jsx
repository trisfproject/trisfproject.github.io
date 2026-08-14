export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-site pt-12 pb-28 md:py-12 bg-surface">
      <div className="section-shell flex flex-col md:flex-row justify-between gap-8 text-sm text-text-muted">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-text-main">TRISF PROJECT</p>
          <p>Solusi digital untuk kebutuhan bisnis dan operasional.</p>
        </div>
        <div className="flex flex-col md:items-end justify-between gap-6">
          <div className="flex items-center gap-2">
            <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-text-main">Blog</a>
            <span className="opacity-40">·</span>
            <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-text-main">Telegram</a>
            <span className="opacity-40">·</span>
            <a href="#" target="_blank" rel="noreferrer" className="transition hover:text-text-main">Instagram</a>
          </div>
          <p className="text-xs">© {year} TRISF PROJECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
