import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllArticles, getArticleBySlug, formatDateVi } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Tin Đài Loan 24h`,
    description: article.summaryVi,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
        <Link
          href="/"
          className="mb-4 inline-block text-sm text-zinc-500 hover:text-red-600 dark:text-zinc-400"
        >
          ← Về trang chủ
        </Link>
        <span className="inline-block rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600 dark:bg-red-950 dark:text-red-300">
          {article.category}
        </span>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {article.title}
        </h1>
        <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={article.publishedAt}>{formatDateVi(article.publishedAt)}</time>
        </div>
        <div className="relative mt-6 h-56 w-full overflow-hidden rounded-lg bg-zinc-100 sm:h-80 dark:bg-zinc-800">
          <Image src={article.imageUrl} alt="" fill sizes="768px" className="object-cover" />
        </div>
        <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
          {article.summaryVi}
        </p>
        <div className="mt-8 rounded-lg border border-black/10 bg-white p-4 text-sm text-zinc-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
          Bài viết được tóm tắt và biên soạn lại từ nguồn:{" "}
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-red-600 hover:underline"
          >
            {article.sourceName}
          </a>
        </div>
      </main>
      <footer className="border-t border-black/10 py-6 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        Nội dung được tổng hợp và biên soạn lại từ các nguồn tin Đài Loan, luôn kèm trích dẫn nguồn gốc.
      </footer>
    </div>
  );
}
