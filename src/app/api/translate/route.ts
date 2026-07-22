import { NextResponse } from "next/server";
import { translateToVietnamese, TranslateConfigError } from "@/lib/translate";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const text = body?.text;

  if (typeof text !== "string" || text.trim().length === 0) {
    return NextResponse.json({ error: "Thiếu nội dung cần dịch" }, { status: 400 });
  }

  try {
    const translated = await translateToVietnamese(text);
    return NextResponse.json({ translated });
  } catch (error) {
    if (error instanceof TranslateConfigError) {
      return NextResponse.json({ error: error.message }, { status: 501 });
    }
    const message = error instanceof Error ? error.message : "Lỗi không xác định";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
