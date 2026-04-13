"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  amount?: number;
};

export function FadeInSection({
  children,
  className,
  as: Tag = "section",
  amount = 0.2,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <Tag ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
