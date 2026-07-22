import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ArticleCard } from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Tin mới nhất
          </h1>
          <Link
            href="/dia-diem"
            className="text-sm font-medium text-red-600 hover:underline dark:text-red-400"
          >
            Khám phá ăn uống &amp; check-in →
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </main>
      <footer className="border-t border-black/10 py-6 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        Nội dung được tổng hợp và biên soạn lại từ các nguồn tin Đài Loan, luôn kèm trích dẫn nguồn gốc.
      </footer>
    </div>
  );
}
