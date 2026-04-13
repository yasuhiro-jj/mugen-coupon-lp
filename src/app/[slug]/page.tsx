import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LpLandingView } from "@/components/LpLandingView";
import { getLpSeo } from "@/data/lp-seo";
import { getLpDataBySlug, lpDataList } from "@/data/lp-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lpDataList.map(({ slug }) => ({ slug }));
}

/** 上記11スラッグ以外はビルド対象外（未生成URLは404） */
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLpDataBySlug(slug);
  const seo = getLpSeo(slug);

  if (!data) {
    return { title: "ページが見つかりません" };
  }

  const title =
    seo?.title ?? `${data.industry}の無限クーポン | LINE×無限クーポンでリピートを育てる`;
  const description =
    seo?.description ??
    `${data.heroSubtitle} note ¥4,980で構築マニュアル公開中。`;
  const ogImage = seo?.ogImage ?? "/images/og-default.png";
  const ogImageAlt = seo?.ogImageAlt ?? `${data.industry}向け 無限クーポン`;

  const canonicalPath = `/${slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: "無限クーポン 業種別LP",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function IndustryLpPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getLpDataBySlug(slug);

  if (!data) {
    notFound();
  }

  return <LpLandingView data={data} />;
}
