import Link from "next/link";
import type { LPData } from "@/data/lp-data";
import { FixedCTABar } from "@/components/FixedCTABar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingCTA } from "@/components/PricingCTA";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { UseCaseSection } from "@/components/UseCaseSection";

type Props = {
  data: LPData;
};

export function LpLandingView({ data }: Props) {
  const { accentColor } = data;

  return (
    <>
      <Header accentColor={accentColor} />
      <main className="pb-24 md:pb-0">
        <HeroSection
          heroTitle={data.heroTitle}
          heroSubtitle={data.heroSubtitle}
          accentColor={accentColor}
        />
        <ProblemSection problems={data.problems} accentColor={accentColor} />
        <SolutionSection steps={data.steps} accentColor={accentColor} loopBackTo={2} />
        <UseCaseSection
          useCases={data.useCases}
          steps={data.steps}
          deliveryInterval={data.deliveryInterval}
          industry={data.industry}
          accentColor={accentColor}
        />
        <TestimonialSection accentColor={accentColor} testimonial={data.testimonial} />
        <PricingCTA accentColor={accentColor} />
        <div className="border-t border-slate-200 bg-gray-50 py-10">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Link
              href="/"
              className="inline-flex text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
            >
              ← 業種一覧へ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer accentColor={accentColor} />
      <FixedCTABar accentColor={accentColor} />
    </>
  );
}
