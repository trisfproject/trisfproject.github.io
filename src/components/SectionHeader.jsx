export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#22c55e]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#a1a1aa] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
