"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";

const achievements = [
  "寿司職人歴30年＋飲食店経営25年以上",
  "プロラインを6か月かけて独自に習得",
  "自店舗で無限クーポンを実運用",
  "LINEリストを「生きた資産」に転換",
];

export function Author() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <FadeInSection as="div" className="mx-auto max-w-4xl px-4">
        <SectionTitle>著者について</SectionTitle>
        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
          <div
            className="h-[150px] w-[150px] shrink-0 rounded-full bg-gray-300"
            role="img"
            aria-label="著者プロフィール写真（準備中）"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="mb-6 text-lg font-bold text-[#0f3460] md:text-xl">
              飲食店オーナー × プロライン実践者
            </p>
            <ul className="space-y-3 text-left text-slate-700">
              {achievements.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-[#ff6b35]" aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
