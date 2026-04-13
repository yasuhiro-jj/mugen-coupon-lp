"use client";

import { useEffect, useRef, useState } from "react";

export type TestimonialSectionProps = {
  accentColor: string;
  testimonial?: { quote: string; author: string; result: string };
};

type Stat = { label: string; suffix: string; value: number; prefix?: string };

const DEFAULT_STATS: Stat[] = [
  { label: "リピート率", prefix: "+", suffix: "%", value: 40 },
  { label: "月間売上", prefix: "+", suffix: "%", value: 25 },
  { label: "販促時間", prefix: "-", suffix: "%", value: 90 },
];

function useCountUp(target: number, enabled: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }
    let start: number | null = null;
    let frame: number;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target, duration]);
  return value;
}

function StatBlock({ stat, accentColor, enabled }: { stat: Stat; accentColor: string; enabled: boolean }) {
  const n = useCountUp(stat.value, enabled);
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-md ring-1 ring-slate-200/60">
      <p className="text-sm font-medium text-slate-600">{stat.label}</p>
      <p
        className="mt-2 text-4xl font-extrabold tabular-nums sm:text-5xl"
        style={{ color: accentColor }}
      >
        {stat.prefix}
        {n}
        {stat.suffix}
      </p>
    </div>
  );
}

export function TestimonialSection({ accentColor, testimonial }: TestimonialSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setOn(true);
      },
      { threshold: 0.2, rootMargin: "0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          <span className="relative inline-block">
            導入効果（イメージ）
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ backgroundColor: accentColor }}
              aria-hidden
            />
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-slate-500">
          ※数値はデモ用の仮表示です。効果は店舗・施策により異なります。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {DEFAULT_STATS.map((s) => (
            <StatBlock key={s.label} stat={s} accentColor={accentColor} enabled={on} />
          ))}
        </div>

        <h3 className="mt-14 text-center text-xl font-bold text-slate-900">お客様の声</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonial ? (
            <figure className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md ring-1 ring-slate-200/60">
              <blockquote className="text-base leading-relaxed text-slate-700">「{testimonial.quote}」</blockquote>
              <figcaption className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-4 text-sm">
                <span className="font-semibold text-slate-900">{testimonial.author}</span>
                <span className="font-medium" style={{ color: accentColor }}>
                  {testimonial.result}
                </span>
              </figcaption>
            </figure>
          ) : null}
          <figure
            className={`rounded-2xl border bg-white/80 p-6 shadow-sm ${
              testimonial ? "border-slate-100" : "border-dashed border-slate-200"
            }`}
          >
            <blockquote className="text-base leading-relaxed text-slate-600">
              「配信の手間が減り、スタッフは施術に集中できるようになりました。クーポンの内容も季節ごとに変えやすいです。」
            </blockquote>
            <figcaption className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
              仮の声（サロン経営者）
            </figcaption>
          </figure>
          {!testimonial ? (
            <figure className="rounded-2xl border border-dashed border-slate-200 bg-white/80 p-6 shadow-sm">
              <blockquote className="text-base leading-relaxed text-slate-600">
                「新規だけで終わらず、紹介とリピートの導線が一本化できました。」
              </blockquote>
              <figcaption className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
                仮の声（店舗オーナー）
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
