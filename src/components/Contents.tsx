"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "📨",
    title: "配信テンプレ10通",
    body: "コピペで使える実装用テキスト",
  },
  {
    icon: "🎟️",
    title: "クーポン設計テンプレ",
    body: "9種類のクーポン設計シート",
  },
  {
    icon: "✅",
    title: "構築チェックリスト",
    body: "全工程を一覧化",
  },
  {
    icon: "🎥",
    title: "動画解説",
    body: "プロライン画面操作の実演",
  },
  {
    icon: "🏷️",
    title: "タグ設計テンプレ",
    body: "顧客セグメント管理の設計図",
  },
];

export function Contents() {
  return (
    <section className="bg-white py-16 md:py-24">
      <FadeInSection as="div" className="mx-auto max-w-5xl px-4">
        <SectionTitle>このnoteで得られるもの</SectionTitle>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {cards.map((c, index) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm md:p-6"
            >
              <span className="mb-2 text-2xl" aria-hidden>
                {c.icon}
              </span>
              <h3 className="mb-2 text-sm font-bold text-[#0f3460] md:text-base">
                {c.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
