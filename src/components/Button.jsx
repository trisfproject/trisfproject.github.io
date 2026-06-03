export function Button({ href, children, icon: Icon, variant = 'primary', className = '' }) {
  const isExternal = /^https?:|^mailto:/.test(href);
  const styles =
    variant === 'primary'
      ? 'border-[#22c55e]/80 bg-[#22c55e] text-[#04100a] hover:bg-[#4ade80] dark:hover:bg-[#4ade80]'
      : 'border-line-site bg-black/[0.03] dark:bg-white/[0.04] text-text-main hover:bg-black/[0.06] dark:hover:bg-white/[0.08] hover:border-black/15 dark:hover:border-white/20';

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 focus:ring-offset-2 focus:ring-offset-bg-site active:translate-y-0 sm:min-h-12 sm:gap-2 sm:px-5 sm:text-sm ${styles} ${className}`}
    >
      {Icon ? <Icon aria-hidden="true" className="size-4 sm:size-[18px]" strokeWidth={2.2} /> : null}
      {children}
    </a>
  );
}
