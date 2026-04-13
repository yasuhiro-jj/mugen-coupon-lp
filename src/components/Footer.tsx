const PROLINE_LINKS = [
  { href: "https://fuji-press.net/proline1/", label: "プロラインフリーの登録はこちら（無料）" },
  { href: "https://fuji-press.net/proline2-3-2/", label: "プロラインフリーの登録はこちら（無料）" },
] as const;

export type FooterProps = {
  accentColor?: string;
};

export function Footer({ accentColor = "#3B82F6" }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-sm">© {new Date().getFullYear()} 無限クーポン</p>
        <ul className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {PROLINE_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 transition hover:text-white"
                style={{ color: accentColor }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
