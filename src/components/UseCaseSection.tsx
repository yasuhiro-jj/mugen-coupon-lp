import type { LPData } from "@/data/lp-data";

export type UseCaseSectionProps = {
  useCases: LPData["useCases"];
  steps: LPData["steps"];
  deliveryInterval: string;
  industry: string;
  accentColor: string;
};

/** タイムラインの日数（例: Day 0 / 30 / 60 …） */
function buildScheduleDays(stepCount: number): number[] {
  const gap = 30;
  return Array.from({ length: stepCount }, (_, i) => i * gap);
}

export function UseCaseSection({
  useCases,
  steps,
  deliveryInterval,
  industry,
  accentColor,
}: UseCaseSectionProps) {
  const days = buildScheduleDays(Math.min(steps.length, 9));
  const displaySteps = steps.slice(0, 9);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          <span className="relative inline-block">
            あなたのお店ではこう使える
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ backgroundColor: accentColor }}
              aria-hidden
            />
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          <span className="font-semibold text-slate-800">{industry}</span>
          向けの活用イメージです。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <span className="text-sm font-medium text-slate-600">推奨配信の目安</span>
          <span
            className="inline-flex items-center rounded-full px-5 py-2 text-base font-bold text-white shadow-md"
            style={{ backgroundColor: accentColor }}
          >
            {deliveryInterval}
          </span>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {useCases.map((uc, i) => (
            <li
              key={i}
              className="rounded-2xl border border-slate-100 bg-gray-50 p-6 shadow-sm ring-1 ring-slate-200/50"
            >
              <h3 className="text-lg font-bold text-slate-900">{uc.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{uc.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="text-center text-lg font-bold text-slate-900">配信スケジュール例</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-500">
            例として30日刻みで並べています。実際は「{deliveryInterval}」に合わせて調整します。
          </p>
          <div className="relative mx-auto mt-8 max-w-3xl">
            <div
              className="absolute bottom-0 left-[7px] top-0 w-0.5 sm:left-[9px]"
              style={{ background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}33)` }}
              aria-hidden
            />
            <ol className="relative space-y-0">
              {displaySteps.map((step, i) => (
                <li key={i} className="flex gap-4 pb-8 last:pb-0 sm:gap-6">
                  <div
                    className="relative z-[1] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white shadow sm:h-6 sm:w-6"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Day {days[i]}
                    </p>
                    <p className="mt-1 font-bold text-slate-900">{step.label}</p>
                    <p className="mt-0.5 text-sm text-slate-600">{step.couponName}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
