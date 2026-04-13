import Link from "next/link";

export type HeroSectionProps = {
  heroTitle: string;
  heroSubtitle: string;
  accentColor: string;
  ctaLink?: string;
};

export function HeroSection({ heroTitle, heroSubtitle, accentColor, ctaLink = "#" }: HeroSectionProps) {
  const lines = heroTitle.split("\n");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 py-16 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 20%, ${accentColor}, transparent 55%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: `linear-gradient(165deg, ${accentColor}55 0%, transparent 42%, #020617 100%)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <h1 className="mx-auto flex max-w-[min(100%,36rem)] flex-col gap-1.5 text-balance text-xl font-bold leading-snug tracking-tight text-white sm:gap-2 sm:text-2xl md:text-3xl md:leading-tight lg:text-3xl">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base md:text-lg">
          {heroSubtitle}
        </p>
        <div className="mt-10">
          <Link
            href={ctaLink}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:brightness-110 hover:shadow-xl active:scale-[0.98] sm:text-lg"
            style={{ backgroundColor: accentColor }}
          >
            今すぐnoteで学ぶ → ¥4,980
          </Link>
        </div>
      </div>
    </section>
  );
}
