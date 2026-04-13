export type ProblemSectionProps = {
  problems: { icon: string; text: string }[];
  accentColor: string;
};

export function ProblemSection({ problems, accentColor }: ProblemSectionProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          <span className="relative inline-block">
            こんなお悩みありませんか？
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ backgroundColor: accentColor }}
              aria-hidden
            />
          </span>
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {problems.map((p, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-md ring-1 ring-slate-200/60"
            >
              <span className="text-4xl leading-none sm:text-5xl" aria-hidden>
                {p.icon}
              </span>
              <p className="min-w-0 flex-1 pt-1 text-base font-medium leading-relaxed text-slate-800">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
