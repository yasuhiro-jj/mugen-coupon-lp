"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { CTAButton } from "@/components/CTAButton";

const badges = [
  "配信テンプレ10通付き",
  "動画解説付き",
  "構築チェックリスト付き",
];

export function Hero() {
  return (
    <FadeInSection
      as="section"
      className="gradient-hero relative overflow-hidden text-white"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <p className="mb-4 text-center text-sm font-medium text-[#f7c948] md:text-base">
          飲食店のための全自動リピート装置
        </p>
        <h1 className="mb-6 text-center text-2xl font-bold leading-snug md:text-4xl md:leading-tight">
          LINEの友だちリスト、
          <span className="text-[#ff6b35]">眠らせていませんか？</span>
        </h1>
        <p className="mb-2 text-center text-xl font-bold md:text-2xl">
          無限クーポン 完全構築マニュアル
        </p>
        <p className="mb-10 text-center text-lg text-slate-200 md:text-xl">
          📘 4,980円<span className="text-base font-normal">（税込・買い切り）</span>
        </p>
        <div className="mb-10 flex flex-col items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-center text-xs font-medium text-white backdrop-blur-sm md:text-sm">
            【図解】無限クーポン 10ステップ全体フロー
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm md:text-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <CTAButton
            href="https://note.com/xxxx"
            variant="primary"
            ariaLabel="noteで無限クーポン完全構築マニュアルを購入する"
          >
            今すぐnoteを購入する →
          </CTAButton>
        </div>
      </div>
    </FadeInSection>
  );
}
