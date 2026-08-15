export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-site bg-surface pt-8 pb-28 sm:pt-10 md:pt-12 md:pb-12">
      <div className="section-shell flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between md:gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-green" />
            <p className="text-[0.8rem] sm:text-[0.85rem] font-bold text-text-main tracking-wide">TRISF PROJECT</p>
          </div>
          <p className="text-[0.8rem] sm:text-[0.85rem] text-text-muted font-light leading-relaxed max-w-[260px] md:max-w-none">
            Solusi digital untuk kebutuhan bisnis dan operasional.
          </p>
        </div>

        {/* Links + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 mt-6 md:mt-0 md:gap-5">
          <div className="flex items-center gap-3 text-[0.8rem] sm:text-[0.85rem] text-text-muted">
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Blog</a>
            <span className="text-text-muted/25">·</span>
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Telegram</a>
            <span className="text-text-muted/25">·</span>
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Instagram</a>
          </div>
          <p className="text-[0.7rem] sm:text-xs text-text-muted/50 mt-1 md:mt-0">© {year} TRISF PROJECT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
