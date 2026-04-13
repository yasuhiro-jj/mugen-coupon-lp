"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  "①初回特典",
  "②魅力紹介①",
  "③魅力紹介②",
  "④平日限定",
  "⑤雨の日",
  "⑥記念日",
  "⑦季節限定",
  "⑧再来店促進",
  "⑨友だち紹介",
];

function StepBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex min-h-[2.5rem] w-full max-w-[18rem] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-xs font-semibold leading-snug text-slate-800 shadow-sm sm:text-sm ${className}`}
    >
      {children}
    </span>
  );
}

function ArrowRight() {
  return (
    <span
      className="text-lg font-bold leading-none text-[#ff6b35] sm:text-xl"
      aria-hidden
    >
      →
    </span>
  );
}

function ArrowDown() {
  return (
    <span
      className="block py-0.5 text-center text-2xl font-bold leading-none text-[#ff6b35]"
      aria-hidden
    >
      ↓
    </span>
  );
}

/** ①→②→… の横並び（折り返し時も → でつながる） */
function HorizontalChain({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-x-2">
      {items.flatMap((label, i) =>
        i < items.length - 1
          ? [
              <StepBadge key={label}>{label}</StepBadge>,
              <ArrowRight key={`${label}-r`} />,
            ]
          : [<StepBadge key={label}>{label}</StepBadge>],
      )}
    </div>
  );
}

export function Concept() {
  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <FadeInSection as="div" className="mx-auto max-w-4xl px-4">
        <SectionTitle>無限クーポンとは？</SectionTitle>
        <div className="mt-12 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg md:p-10">
          <p className="mb-2 text-center text-lg font-bold text-[#0f3460] md:text-xl">
            🔄 10ステップのループ構造
          </p>
          <p className="mb-8 text-center text-sm leading-relaxed text-slate-600 md:text-base">
            ①〜⑨まで<strong className="text-[#0f3460]">順番に</strong>
            配信し、ループ後は
            <strong className="text-[#0f3460]">②番目のステップ（魅力紹介①）</strong>
            から再開します。
            <span className="mt-1 block text-xs text-slate-500 md:text-sm">
              ※①初回特典は新規向けのため、2周目以降のサイクルでは送らず、②以降を繰り返します。
            </span>
          </p>

          {/* スマホ: 縦の一本道（↓）で連続感 */}
          <div className="mb-10 md:hidden">
            <p className="mb-3 text-center text-xs font-semibold text-slate-500">
              配信の流れ（①→⑨）
            </p>
            <div className="flex flex-col items-center">
              {steps.map((label, i) => (
                <div key={label} className="flex w-full max-w-xs flex-col items-center">
                  <StepBadge>{label}</StepBadge>
                  {i < steps.length - 1 && <ArrowDown />}
                </div>
              ))}
              <ArrowDown />
              <div className="w-full max-w-xs rounded-2xl border-2 border-dashed border-[#ff6b35]/50 bg-orange-50/90 p-4 text-center">
                <p className="mb-2 text-xs font-semibold text-[#ff6b35]">
                  ループ（10番目）
                </p>
                <span className="inline-block rounded-full bg-[#ff6b35] px-4 py-2 text-sm font-bold text-white shadow-md">
                  🔁 最初に戻る！
                </span>
                <p className="mt-3 text-xs leading-relaxed text-slate-700">
                  次の配信は<strong className="text-[#0f3460]">②魅力紹介①</strong>
                  から再開（①はスキップ）
                </p>
              </div>
              <ArrowDown />
              <p className="mb-1 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                再開ポイント
              </p>
              <StepBadge className="ring-2 ring-[#ff6b35] ring-offset-2">
                ②魅力紹介①
              </StepBadge>
              <p className="mt-2 max-w-xs text-center text-xs leading-relaxed text-slate-600">
                → ③→…→⑨→ループ→②… を自動で繰り返します
              </p>
            </div>
          </div>

          {/* タブレット以上: 横の矢印で①→⑨まで一続き + 下向きでループへ */}
          <div className="mb-10 hidden md:block">
            <p className="mb-4 text-center text-sm font-semibold text-slate-600">
              配信の流れ（① から ⑨ までを <span className="text-[#ff6b35]">→</span>{" "}
              でつなぐ）
            </p>
            <HorizontalChain items={steps} />
            <ArrowDown />
            <div className="mx-auto max-w-xl rounded-2xl border-2 border-dashed border-[#ff6b35]/50 bg-orange-50/90 p-5 text-center">
              <p className="mb-2 text-sm font-semibold text-[#ff6b35]">
                ループ（10番目）
              </p>
              <span className="inline-block rounded-full bg-[#ff6b35] px-5 py-2.5 text-base font-bold text-white shadow-md">
                🔁 最初に戻る！
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                次の配信サイクルは
                <strong className="text-[#0f3460]">②魅力紹介①</strong>
                から再開します。
                <span className="mt-1 block text-xs text-slate-500">
                  ①初回特典は新規向けのため、ループ後は送らず②以降のみを繰り返します。
                </span>
              </p>
            </div>
            <ArrowDown />
            <div className="flex flex-col items-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                再開ポイント（2番目のステップ）
              </p>
              <StepBadge className="max-w-md ring-2 ring-[#ff6b35] ring-offset-4">
                ②魅力紹介①
              </StepBadge>
              <p className="mt-3 text-center text-sm text-slate-600">
                <span className="text-[#ff6b35]">→</span> ③→④→…→⑨→ループ→②…
                の順で、無限に回り続けます
              </p>
            </div>
          </div>

          <p className="mb-6 text-center text-lg font-bold leading-relaxed text-[#0f3460]">
            <span className="marker-yellow px-1">
              一度作れば永遠に回り続ける来店装置
            </span>
          </p>
          <p className="text-center text-sm leading-relaxed text-slate-600 md:text-base">
            プロラインフリーの無料枠内で構築可能
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
