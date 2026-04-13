"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { CTAButton } from "@/components/CTAButton";

const offerBadges = [
  "配信テンプレ10通付き",
  "動画解説付き",
  "構築チェックリスト付き",
  "クーポン設計テンプレ",
];

export function Offer() {
  return (
    <FadeInSection
      as="section"
      className="gradient-hero relative overflow-hidden text-white"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <h2 className="text-2xl font-bold md:text-3xl">
          無限クーポン完全構築マニュアル
        </h2>
        <p className="mt-8 text-3xl font-bold text-[#f7c948] md:text-4xl">
          📘 4,980円
        </p>
        <p className="mt-2 text-sm text-slate-200">税込・買い切り</p>
        <div className="mb-10 mt-10 flex flex-col items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-center text-xs font-medium text-white backdrop-blur-sm md:text-sm">
            【図解】無限クーポン 10ステップ全体フロー
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {offerBadges.map((label) => (
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
            ariaLabel="無限クーポン完全構築マニュアルを購入する"
          >
            今すぐ購入する →
          </CTAButton>
        </div>
      </div>
    </FadeInSection>
  );
}
