import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { PlaceCard } from "@/components/PlaceCard";
import { getPlacesByCategory, placeCategoryLabels, type PlaceCategory } from "@/lib/places";

export const metadata: Metadata = {
  title: "Ăn uống & Check-in Đài Loan | Tin Đài Loan 24h",
  description:
    "Tổng hợp địa điểm ăn uống, check-in hot nhất Đài Loan dành cho người Việt, nội dung dịch từ Instagram, Threads và các trang du lịch Đài Loan.",
};

const tabs: { key: PlaceCategory | "all"; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "an-uong", label: placeCategoryLabels["an-uong"] },
  { key: "check-in", label: placeCategoryLabels["check-in"] },
];

export default async function PlacesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory: PlaceCategory | "all" =
    category === "an-uong" || category === "check-in" ? category : "all";

  const placesList = getPlacesByCategory(activeCategory);

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
        <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Ăn uống &amp; Check-in Đài Loan
        </h1>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          Tổng hợp và dịch từ Instagram, Threads, các trang du lịch Đài Loan &mdash; luôn kèm nguồn gốc.
        </p>
        <div className="mb-6 flex gap-2">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={tab.key === "all" ? "/dia-diem" : `/dia-diem?category=${tab.key}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === tab.key
                  ? "bg-red-600 text-white"
                  : "bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {placesList.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>
      </main>
      <footer className="border-t border-black/10 py-6 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        Nội dung được tổng hợp, dịch và biên soạn lại, luôn kèm trích dẫn nguồn gốc.
      </footer>
    </div>
  );
}
