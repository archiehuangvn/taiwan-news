"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";

export default function TranslateToolPage() {
  const [source, setSource] = useState("");
  const [translated, setTranslated] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleTranslate() {
    setError(null);
    setTranslated("");
    setLoading(true);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Dịch thất bại");
      } else {
        setTranslated(data.translated);
      }
    } catch {
      setError("Không thể kết nối tới dịch vụ dịch thuật");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-zinc-900">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
        <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Công cụ dịch nội dung
        </h1>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          Dán nội dung gốc (caption Instagram/Threads, mô tả trang web Đài Loan) để dịch sang tiếng
          Việt bằng Google Cloud Translation API, sau đó biên tập lại và thêm vào{" "}
          <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">
            src/lib/places.ts
          </code>
          . Công cụ này chỉ hỗ trợ dịch — việc lấy nội dung nguồn vẫn cần thực hiện thủ công, đúng
          điều khoản dịch vụ của từng nền tảng.
        </p>
        <textarea
          value={source}
          onChange={(e) => setSource(e.target.value)}
          rows={6}
          placeholder="Dán nội dung gốc vào đây..."
          className="w-full rounded-lg border border-black/10 bg-white p-3 text-sm text-zinc-900 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50"
        />
        <button
          onClick={handleTranslate}
          disabled={loading || source.trim().length === 0}
          className="mt-3 rounded-full bg-red-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Đang dịch..." : "Dịch sang tiếng Việt"}
        </button>

        {error && (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        )}

        {translated && (
          <div className="mt-4 rounded-lg border border-black/10 bg-white p-3 text-sm text-zinc-800 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200">
            {translated}
          </div>
        )}
      </main>
    </div>
  );
}
