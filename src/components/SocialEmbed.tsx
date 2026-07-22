"use client";

import { useEffect, useRef } from "react";
import type { SourcePlatform } from "@/lib/places";

const EMBED_SCRIPTS: Record<"instagram" | "threads", string> = {
  instagram: "https://www.instagram.com/embed.js",
  threads: "https://www.threads.net/embed.js",
};

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function SocialEmbed({
  platform,
  url,
}: {
  platform: SourcePlatform;
  url: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (platform === "website") return;

    const src = EMBED_SCRIPTS[platform];
    const existing = document.querySelector(`script[src="${src}"]`);

    function process() {
      window.instgrm?.Embeds.process();
    }

    if (existing) {
      process();
    } else {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    }
  }, [platform, url]);

  if (platform === "website") return null;

  return (
    <div ref={containerRef} className="my-6 flex justify-center overflow-hidden">
      <blockquote
        className={platform === "instagram" ? "instagram-media" : "threads-embed"}
        data-instgrm-permalink={platform === "instagram" ? url : undefined}
        data-instgrm-version={platform === "instagram" ? "14" : undefined}
        style={{ width: "100%", maxWidth: 540 }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          Xem bài viết gốc
        </a>
      </blockquote>
    </div>
  );
}
