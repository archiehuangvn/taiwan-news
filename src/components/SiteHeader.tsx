import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-red-600">Tin Đài Loan</span>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">24h</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/"
            className="text-zinc-600 hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
          >
            Tin tức
          </Link>
          <Link
            href="/dia-diem"
            className="text-zinc-600 hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400"
          >
            Ăn uống &amp; Check-in
          </Link>
        </nav>
      </div>
    </header>
  );
}
