"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#ff6b35] to-[#ff8f5a] text-white shadow-lg shadow-orange-500/25",
  secondary:
    "bg-gradient-to-r from-[#2d6a4f] to-[#40916c] text-white shadow-lg shadow-emerald-900/20",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: Props) {
  return (
    <motion.span
      className="inline-block"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center rounded-full px-10 py-4 text-center text-base font-bold transition-colors ${variantClass[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.span>
  );
}
