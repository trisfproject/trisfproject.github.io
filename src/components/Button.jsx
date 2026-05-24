export function Button({ href, children, icon: Icon, variant = 'primary', className = '' }) {
  const styles =
    variant === 'primary'
      ? 'border-[#22c55e]/80 bg-[#22c55e] text-[#04100a] hover:bg-[#4ade80]'
      : 'border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/70 focus:ring-offset-2 focus:ring-offset-[#050816] active:translate-y-0 ${styles} ${className}`}
    >
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
      {children}
    </a>
  );
}
