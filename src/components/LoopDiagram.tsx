"use client";

import { useEffect, useId, useRef, useState } from "react";

const CIRCLED: readonly string[] = [
  "①",
  "②",
  "③",
  "④",
  "⑤",
  "⑥",
  "⑦",
  "⑧",
  "⑨",
];

export type LoopDiagramProps = {
  steps: { label: string; couponName: string; icon: string }[];
  /** 再開ステップ番号（1〜9、①=1 … ②=2） */
  loopBackTo?: number;
  accentColor: string;
};

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12h14M14 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 5v14M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type StepCardProps = {
  step: { label: string; couponName: string; icon: string };
  stepIndex: number;
  loopBackTo: number;
  accentColor: string;
  visible: boolean;
  animOrder: number;
};

function StepCard({
  step,
  stepIndex,
  loopBackTo,
  accentColor,
  visible,
  animOrder,
}: StepCardProps) {
  const isFirst = stepIndex === 0;
  const isLoopTarget = stepIndex === loopBackTo - 1;

  return (
    <div
      className={[
        "w-full max-w-md rounded-2xl bg-white p-4 shadow-md transition-all duration-700 ease-out",
        isFirst
          ? "border-2 border-dashed border-slate-300 opacity-50"
          : isLoopTarget
            ? ""
            : "border border-slate-100 ring-1 ring-slate-200/80",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        transitionDelay: `${animOrder * 85}ms`,
        ...(isLoopTarget
          ? {
              borderColor: accentColor,
              borderWidth: 4,
              borderStyle: "solid",
              boxShadow: `0 8px 30px -8px ${accentColor}55`,
            }
          : {}),
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none" aria-hidden>
          {step.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-slate-500">
            <span className="font-bold text-slate-800">{CIRCLED[stepIndex]}</span>
            <span className="ml-1.5">{step.label}</span>
          </p>
          <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-900">{step.couponName}</p>
          {isFirst ? (
            <p className="mt-2 text-xs text-slate-500">※2周目以降はスキップ（新規のみ）</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const DELAY_MS = 85;
const ORDER = {
  loop: 9,
  resumeLine: 10,
  footerMain: 11,
  footerSub: 12,
} as const;

function LoopBlock({
  accentColor,
  visible,
  animOrder,
}: {
  accentColor: string;
  visible: boolean;
  animOrder: number;
}) {
  return (
    <div
      className={`w-full max-w-lg rounded-2xl px-6 py-8 text-center shadow-xl transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        backgroundColor: accentColor,
        transitionDelay: `${animOrder * DELAY_MS}ms`,
      }}
    >
      <p className="text-4xl" aria-hidden>
        🔁
      </p>
      <p className="mt-2 text-lg font-bold text-white">ループ（10番目）</p>
      <p className="mt-1 text-xl font-extrabold tracking-wide text-white">最初に戻る！</p>
    </div>
  );
}

function FooterLines({ visible, mainOrder, subOrder }: { visible: boolean; mainOrder: number; subOrder: number }) {
  return (
    <div className="mt-6 w-full max-w-2xl space-y-2 text-center">
      <p
        className={`text-xl font-extrabold leading-snug text-slate-900 transition-all duration-700 ease-out sm:text-2xl ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: `${mainOrder * DELAY_MS}ms` }}
      >
        一度作れば永遠に回り続ける来店装置
      </p>
      <p
        className={`text-sm text-slate-500 transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: `${subOrder * DELAY_MS}ms` }}
      >
        プロラインフリーの無料枠内で構築可能
      </p>
    </div>
  );
}

export function LoopDiagram({ steps, loopBackTo = 2, accentColor }: LoopDiagramProps) {
  const safeSteps = steps.slice(0, 9);
  const loopTargetIndex = Math.min(Math.max(loopBackTo, 1), 9) - 1;
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (safeSteps.length < 9) {
    return (
      <p className="text-center text-sm text-red-600" role="alert">
        ループ図には9ステップのデータが必要です（現在: {safeSteps.length}件）。
      </p>
    );
  }

  return (
    <section
      ref={rootRef}
      className="mx-auto w-full max-w-5xl px-4 py-8"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="sr-only">
        10ステップ ループ配信構造
      </h2>

      {/* モバイル：1列 */}
      <div className="flex flex-col items-center gap-2 md:hidden">
        {safeSteps.map((step, i) => (
          <div key={i} className="flex w-full max-w-md flex-col items-center gap-2">
            <StepCard
              step={step}
              stepIndex={i}
              loopBackTo={loopBackTo}
              accentColor={accentColor}
              visible={visible}
              animOrder={i}
            />
            {i < safeSteps.length - 1 ? <ArrowDown className="shrink-0 text-slate-400" /> : null}
          </div>
        ))}
        <ArrowDown className="shrink-0 text-slate-400" />
        <LoopBlock accentColor={accentColor} visible={visible} animOrder={ORDER.loop} />
        <p
          className={`mt-2 max-w-md text-center text-sm text-slate-600 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${ORDER.resumeLine * DELAY_MS}ms` }}
        >
          {CIRCLED[loopTargetIndex]}
          {safeSteps[loopTargetIndex]?.label} から再開（①は新規のみ → スキップ）
        </p>
        <FooterLines
          visible={visible}
          mainOrder={ORDER.footerMain}
          subOrder={ORDER.footerSub}
        />
      </div>

      {/* デスクトップ：2列ペア + ⑨ + ループ */}
      <div className="hidden md:block">
        {[0, 2, 4, 6].map((start, rowIdx) => (
          <div key={start}>
            {rowIdx > 0 ? (
              <div className="flex justify-center py-3">
                <ArrowDown className="text-slate-400" />
              </div>
            ) : null}
            <div className="mx-auto flex max-w-4xl flex-row items-stretch justify-center gap-3 lg:gap-5">
              <div className="min-w-0 flex-1">
                <StepCard
                  step={safeSteps[start]!}
                  stepIndex={start}
                  loopBackTo={loopBackTo}
                  accentColor={accentColor}
                  visible={visible}
                  animOrder={start}
                />
              </div>
              <div className="flex shrink-0 flex-col justify-center text-slate-400">
                <ArrowRight />
              </div>
              <div className="min-w-0 flex-1">
                <StepCard
                  step={safeSteps[start + 1]!}
                  stepIndex={start + 1}
                  loopBackTo={loopBackTo}
                  accentColor={accentColor}
                  visible={visible}
                  animOrder={start + 1}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center py-3">
          <ArrowDown className="text-slate-400" />
        </div>

        <div className="mx-auto flex max-w-md justify-center px-2">
          <StepCard
            step={safeSteps[8]!}
            stepIndex={8}
            loopBackTo={loopBackTo}
            accentColor={accentColor}
            visible={visible}
            animOrder={8}
          />
        </div>

        <div className="flex justify-center py-4">
          <ArrowDown className="text-slate-400" />
        </div>

        <div className="mx-auto flex max-w-lg flex-col items-center gap-4">
          <LoopBlock accentColor={accentColor} visible={visible} animOrder={ORDER.loop} />
          <p
            className={`text-center text-sm text-slate-600 transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${ORDER.resumeLine * DELAY_MS}ms` }}
          >
            {CIRCLED[loopTargetIndex]}
            {safeSteps[loopTargetIndex]?.label} から再開（①は新規のみ → スキップ）
          </p>
          <FooterLines
            visible={visible}
            mainOrder={ORDER.footerMain}
            subOrder={ORDER.footerSub}
          />
        </div>
      </div>
    </section>
  );
}
