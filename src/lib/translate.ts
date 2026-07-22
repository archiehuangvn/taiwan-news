export class TranslateConfigError extends Error {}

export async function translateToVietnamese(text: string): Promise<string> {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!apiKey) {
    throw new TranslateConfigError("Thiếu biến môi trường GOOGLE_TRANSLATE_API_KEY");
  }

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, target: "vi", format: "text" }),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Google Translate API lỗi (${res.status}): ${body}`);
  }

  const data = await res.json();
  const translated = data?.data?.translations?.[0]?.translatedText;
  if (typeof translated !== "string") {
    throw new Error("Phản hồi từ Google Translate API không hợp lệ");
  }
  return translated;
}
