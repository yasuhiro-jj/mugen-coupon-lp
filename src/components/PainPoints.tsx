"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "LINE公式を作ったけど、活かしきれていない",
  "一斉配信だけでは限界を感じている",
  "リピーターを増やしたいが、何を送ればいいかわからない",
  "クーポンをその場しのぎで終わらせたくない",
  "ブロック率が上がり続けている",
];

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="bg-orange-50 py-16 md:py-24">
      <FadeInSection as="div" className="mx-auto max-w-3xl px-4">
        <SectionTitle>こんな悩み、ありませんか？</SectionTitle>
        <motion.ul
          ref={ref}
          className="mt-12 space-y-4"
          variants={listContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {items.map((text) => (
            <motion.li
              key={text}
              variants={listItem}
              className="flex gap-3 rounded-xl border border-orange-100 bg-white/80 px-4 py-4 text-slate-800 shadow-sm"
            >
              <span className="mt-0.5 text-[#ff6b35]" aria-hidden>
                ●
              </span>
              <span className="leading-relaxed">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </FadeInSection>
    </section>
  );
}
