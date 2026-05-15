import Link from "next/link";
import { NOTE_URL } from "@/constants/links";

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

        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-6">
          <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">noteで学ぶ</h3>
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-slate-900">¥4,980</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              自分で構築したい方向け。手順をすべて解説。
            </p>
            <Link
              href={NOTE_URL}
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 transition hover:bg-slate-100"
            >
              noteを購入する
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
