import type { LPData } from "@/data/lp-data";
import { LoopDiagram } from "@/components/LoopDiagram";

export type SolutionSectionProps = {
  steps: LPData["steps"];
  accentColor: string;
  loopBackTo?: number;
};

const miniSteps = [
  { icon: "📱", title: "LINE友だち追加", text: "来店客・見込み客を公式LINEに集約します。" },
  { icon: "🎁", title: "自動でクーポン配信", text: "間隔と内容を決めれば、あとは自動で届きます。" },
  { icon: "🔁", title: "無限ループで永久リピート", text: "②〜⑨が回り続け、①だけ新規向けにスキップされます。" },
] as const;

export function SolutionSection({ steps, accentColor, loopBackTo = 2 }: SolutionSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          <span className="relative inline-block">
            無限クーポンとは？
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ backgroundColor: accentColor }}
              aria-hidden
            />
          </span>
        </h2>

        <ol className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {miniSteps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-slate-100 bg-slate-50/80 p-6 text-center shadow-sm ring-1 ring-slate-200/50"
            >
              <span
                className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-xs font-bold text-white shadow"
                style={{ backgroundColor: accentColor }}
              >
                {i + 1}
              </span>
              <p className="mt-2 text-3xl" aria-hidden>
                {s.icon}
              </p>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 border-t border-slate-100 bg-slate-50/50 py-4">
        <LoopDiagram steps={steps} loopBackTo={loopBackTo} accentColor={accentColor} />
      </div>
    </section>
  );
}
