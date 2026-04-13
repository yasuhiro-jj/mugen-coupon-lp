import Link from "next/link";
import { lpDataList } from "@/data/lp-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium text-slate-500">無限クーポン × LINE</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            業種別ランディングページ
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            業態に合わせた訴求のひな型を選べます。カードをタップして各LPへ進んでください。
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {lpDataList.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${item.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ backgroundColor: `${item.accentColor}18` }}
                >
                  <span aria-hidden>{item.icon}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-slate-800">
                  {item.industry}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.heroSubtitle}
                </p>
                <span
                  className="mt-4 inline-flex items-center text-sm font-medium"
                  style={{ color: item.accentColor }}
                >
                  詳しく見る
                  <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
