import Link from "next/link";

export type FixedCTABarProps = {
  accentColor: string;
};

export function FixedCTABar({ accentColor }: FixedCTABarProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:hidden"
      style={{ backgroundColor: accentColor }}
    >
      <div className="mx-auto flex max-w-lg justify-center">
        <Link
          href="#pricing"
          className="inline-flex min-h-[48px] w-full max-w-md items-center justify-center rounded-full bg-white/15 px-6 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/25"
        >
          今すぐnoteで学ぶ ¥4,980
        </Link>
      </div>
    </div>
  );
}
