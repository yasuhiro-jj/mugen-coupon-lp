import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "無限クーポン 業種別LP | LINEリピート",
    template: "%s | 無限クーポン 業種別LP",
  },
  description:
    "美容室・サロン・医院・ジムなど10業種向け。LINE×無限クーポンでリピートと来店を自動化する訴求のひな型です。",
  keywords: [
    "LINE",
    "クーポン",
    "リピート",
    "無限クーポン",
    "ランディングページ",
    "業種別",
  ],
  openGraph: {
    title: "無限クーポン 業種別LP",
    description:
      "10業種の独立したランディングページ。業態に合わせたヒーロー・課題・ステップ配信のイメージをご覧いただけます。",
    url: siteUrl,
    siteName: "無限クーポン 業種別LP",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "無限クーポン 業種別LP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "無限クーポン 業種別LP",
    description:
      "LINE×無限クーポンでリピートを育てる。10業種のLP一覧から業態を選べます。",
    images: ["/images/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={noto.variable}>
      <body className={`${noto.className} min-h-screen bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
