import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatDateVi } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/bai-viet/${article.slug}`}
      className="group flex gap-4 rounded-lg border border-black/10 bg-white p-4 transition-colors hover:border-red-300 dark:border-white/10 dark:bg-zinc-950 dark:hover:border-red-800"
    >
      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={article.imageUrl}
          alt=""
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-between">
        <div>
          <span className="inline-block rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600 dark:bg-red-950 dark:text-red-300">
            {article.category}
          </span>
          <h2 className="mt-1 line-clamp-2 text-base font-semibold text-zinc-900 group-hover:text-red-600 dark:text-zinc-50">
            {article.title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span>{article.sourceName}</span>
          <span>·</span>
          <time dateTime={article.publishedAt}>{formatDateVi(article.publishedAt)}</time>
        </div>
      </div>
    </Link>
  );
}
