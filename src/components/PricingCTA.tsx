import Link from "next/link";

export type PricingCTAProps = {
  accentColor: string;
};

const PROLINE_LINKS = [
  { href: "https://fuji-press.net/proline1/", label: "プロラインフリーの登録はこちら（無料）" },
  { href: "https://fuji-press.net/proline2-3-2/", label: "プロラインフリーの登録はこちら（無料）" },
] as const;

export function PricingCTA({ accentColor }: PricingCTAProps) {
  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          <span className="relative inline-block">
            はじめる3つの方法
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ backgroundColor: accentColor }}
              aria-hidden
            />
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">noteで学ぶ</h3>
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-slate-900">¥4,980</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              自分で構築したい方向け。手順をすべて解説。
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
            >
              noteを購入する
            </Link>
          </article>

          <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">無料相談</h3>
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-slate-900">¥0</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              まずは相談したい方。LINEで気軽にどうぞ。
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
            >
              LINEで相談する
            </Link>
          </article>

          <article
            className="relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white p-6 shadow-lg"
            style={{ borderColor: accentColor }}
          >
            <span
              className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
              style={{ backgroundColor: accentColor }}
            >
              おすすめ
            </span>
            <h3 className="pr-20 text-lg font-bold text-slate-900">構築代行</h3>
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-slate-900">¥100,000</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              丸投げOK。プロが最短3日で構築します。
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-5 text-sm font-bold text-white transition hover:brightness-110"
              style={{ backgroundColor: accentColor }}
            >
              構築代行を申し込む
            </Link>
          </article>
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-t border-slate-200 pt-8 text-center">
          <p className="text-sm font-medium text-slate-700">※ プロラインフリーは無料で使えます</p>
          <ul className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            {PROLINE_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4 transition hover:opacity-80"
                  style={{ color: accentColor }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
