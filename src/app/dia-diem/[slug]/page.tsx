import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialEmbed } from "@/components/SocialEmbed";
import { getAllPlaces, getPlaceBySlug, placeCategoryLabels } from "@/lib/places";

export function generateStaticParams() {
  return getAllPlaces().map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) return {};
  return {
    title: `${place.title} | Tin Đài Loan 24h`,
    description: place.descriptionVi,
  };
}

export default async function PlaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) notFound();

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
        <Link
          href="/dia-diem"
          className="mb-4 inline-block text-sm text-zinc-500 hover:text-red-600 dark:text-zinc-400"
        >
          ← Về danh sách địa điểm
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600 dark:bg-red-950 dark:text-red-300">
            {placeCategoryLabels[place.category]}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">{place.city}</span>
        </div>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {place.title}
        </h1>
        <div className="relative mt-6 h-56 w-full overflow-hidden rounded-lg bg-zinc-100 sm:h-80 dark:bg-zinc-800">
          <Image src={place.imageUrl} alt="" fill sizes="768px" className="object-cover" />
        </div>
        <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
          {place.descriptionVi}
        </p>
        {place.sourcePlatform !== "website" && (
          <SocialEmbed platform={place.sourcePlatform} url={place.sourceUrl} />
        )}
        <div className="mt-8 rounded-lg border border-black/10 bg-white p-4 text-sm text-zinc-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
          Nội dung được dịch và biên soạn lại từ nguồn:{" "}
          <a
            href={place.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-red-600 hover:underline"
          >
            {place.sourceName}
          </a>
        </div>
      </main>
      <footer className="border-t border-black/10 py-6 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        Nội dung được tổng hợp, dịch và biên soạn lại, luôn kèm trích dẫn nguồn gốc.
      </footer>
    </div>
  );
}
