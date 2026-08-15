export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-site bg-surface pt-10 pb-36 md:pt-12 md:pb-12">
      <div className="section-shell flex flex-col md:flex-row justify-between gap-6 md:gap-8 text-sm text-text-muted">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-brand-green" />
            <p className="font-bold text-text-main tracking-wide text-[0.85rem]">TRISF PROJECT</p>
          </div>
          <p className="text-[0.8rem] sm:text-[0.85rem] font-light leading-relaxed">
            Solusi digital untuk kebutuhan bisnis dan operasional.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-between gap-4 md:gap-5">
          <div className="flex items-center gap-3 text-[0.8rem] sm:text-[0.85rem]">
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Blog</a>
            <span className="size-0.5 rounded-full bg-text-muted/30" />
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Telegram</a>
            <span className="size-0.5 rounded-full bg-text-muted/30" />
            <a href="#" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-text-main">Instagram</a>
          </div>
          <p className="text-[0.7rem] sm:text-xs text-text-muted/60">© {year} TRISF PROJECT</p>
        </div>
      </div>
    </footer>
  );
}
