export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl sm:mb-10 md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#22c55e]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-normal text-text-main sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
