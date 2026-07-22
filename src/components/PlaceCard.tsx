import Image from "next/image";
import Link from "next/link";
import type { Place } from "@/lib/places";
import { placeCategoryLabels } from "@/lib/places";

const categoryStyles: Record<Place["category"], string> = {
  "an-uong": "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-300",
  "check-in": "bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-300",
};

export function PlaceCard({ place }: { place: Place }) {
  return (
    <Link
      href={`/dia-diem/${place.slug}`}
      className="group flex gap-4 rounded-lg border border-black/10 bg-white p-4 transition-colors hover:border-red-300 dark:border-white/10 dark:bg-zinc-950 dark:hover:border-red-800"
    >
      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={place.imageUrl}
          alt=""
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${categoryStyles[place.category]}`}
            >
              {placeCategoryLabels[place.category]}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{place.city}</span>
          </div>
          <h2 className="mt-1 line-clamp-2 text-base font-semibold text-zinc-900 group-hover:text-red-600 dark:text-zinc-50">
            {place.title}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span>{place.sourceName}</span>
        </div>
      </div>
    </Link>
  );
}
