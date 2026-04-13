import Link from "next/link";
import { getLpDataBySlug } from "@/data/lp-data";

type Props = { slug: string };

export function LpRoutePlaceholder({ slug }: Props) {
  const data = getLpDataBySlug(slug);
  if (!data) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-4 py-16">
        <p className="text-center text-slate-600">データが見つかりません。</p>
        <Link href="/" className="mt-6 text-center text-blue-600 underline">
          トップへ戻る
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <p className="text-4xl">{data.icon}</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">{data.industry}向けLP</h1>
      <p className="mt-2 text-slate-600">このページは準備中です。</p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-blue-600 underline underline-offset-4"
      >
        ← 業種一覧へ戻る
      </Link>
    </main>
  );
}
