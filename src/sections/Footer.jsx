export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-site bg-surface pt-10 pb-32 md:pt-12 md:pb-12">
      <div className="section-shell flex flex-col md:flex-row justify-between gap-6 md:gap-8 text-sm text-text-muted">
        <div className="flex flex-col gap-1.5">
          <p className="font-semibold text-text-main">TRISF PROJECT</p>
          <p className="text-[0.85rem]">Solusi digital untuk kebutuhan bisnis dan operasional.</p>
        </div>
        <div className="flex flex-col md:items-end justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-[0.85rem]">
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Blog</a>
            <span className="opacity-30">·</span>
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Telegram</a>
            <span className="opacity-30">·</span>
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Instagram</a>
          </div>
          <p className="text-xs text-text-muted/70">© {year} TRISF PROJECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
