import Link from "next/link";

export type HeaderProps = {
  accentColor: string;
};

export function Header({ accentColor }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
          無限クーポン
        </Link>
        <Link
          href="#pricing"
          className="inline-flex min-h-[40px] items-center justify-center rounded-full px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:brightness-110 sm:text-sm"
          style={{ backgroundColor: accentColor }}
        >
          今すぐ学ぶ
        </Link>
      </div>
    </header>
  );
}
