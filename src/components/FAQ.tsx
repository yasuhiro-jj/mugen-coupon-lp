"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "自分でも本当にできますか？",
    a: "できます。動画とスクリーンショットで画面操作を追いかけられるので、PCの基本操作ができれば大丈夫です。",
  },
  {
    q: "プロラインを使ったことがないのですが…",
    a: "問題ありません。noteのセクション4で「ゼロからの準備」を全部解説しています。",
  },
  {
    q: "4,980円の価値はありますか？",
    a: "お客様がたった1回来店するだけで回収できる金額です。その後は全自動でクーポンが届き続けます。",
  },
  {
    q: "途中で詰まったら？",
    a: "プロライン配信内で質問を受け付けています。スクリーンショットを送っていただければピンポイントでアドバイスします。",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <FadeInSection as="div" className="mx-auto max-w-3xl px-4">
        <SectionTitle>よくある質問</SectionTitle>
        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-bold text-[#0f3460] md:text-base"
                  aria-expanded={isOpen}
                >
                  <span>Q.{item.q}</span>
                  <span className="text-xl text-[#ff6b35]" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="border-t border-slate-200"
                    >
                      <p className="px-4 py-4 text-sm leading-relaxed text-slate-600 md:text-base">
                        A.{item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
}
