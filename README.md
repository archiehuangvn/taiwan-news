# Tin Đài Loan 24h

Website tổng hợp cho cộng đồng người Việt tại Đài Loan, gồm 2 chuyên mục:

- **Tin tức** (`/`) — tin thời sự, kinh tế, chính sách, đời sống Đài Loan, tóm tắt và dịch sang tiếng Việt.
- **Ăn uống & Check-in** (`/dia-diem`) — địa điểm ăn uống, check-in hot nhất Đài Loan, tổng hợp từ Instagram, Threads và các trang du lịch chính thức của Đài Loan.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Cấu trúc nội dung

Hiện tại nội dung được lưu dưới dạng dữ liệu tĩnh, biên tập thủ công trong code (không dùng database), để dễ kiểm soát chất lượng và tránh vi phạm điều khoản dịch vụ của các nền tảng mạng xã hội:

- `src/lib/articles.ts` — danh sách bài tin tức.
- `src/lib/places.ts` — danh sách địa điểm ăn uống/check-in.

Mỗi mục đều có trường `sourceUrl`/`sourceName` để luôn trích dẫn nguồn gốc.

## Quy trình thêm địa điểm mới (bán tự động)

Instagram và Threads **không cho phép tự động thu thập (scrape)** nội dung công khai của tài khoản khác — vi phạm sẽ dẫn đến khóa tài khoản/IP và rủi ro bản quyền. Vì vậy quy trình cập nhật là bán tự động:

1. Tìm bài viết/địa điểm phù hợp trên Instagram, Threads hoặc trang du lịch Đài Loan (thủ công, đúng ToS).
2. Vào `/admin/dich`, dán nội dung gốc (caption, mô tả) để dịch sang tiếng Việt bằng Google Cloud Translation API.
3. Biên tập lại bản dịch cho tự nhiên, thêm một entry mới vào `src/lib/places.ts` (title, mô tả tiếng Việt, category, city, sourcePlatform, sourceUrl, sourceName, ảnh).
4. Trên trang chi tiết địa điểm, bài gốc từ Instagram/Threads sẽ được nhúng lại bằng oEmbed chính thức của Meta (component `SocialEmbed`), không copy nội dung ảnh/video.

### Biến môi trường

Sao chép `.env.example` thành `.env.local` và điền:

```
GOOGLE_TRANSLATE_API_KEY=
```

Lấy API key tại [Google Cloud Console](https://console.cloud.google.com/apis/credentials) sau khi bật **Cloud Translation API**.

## Hướng phát triển tiếp theo

- Chuyển `lib/articles.ts` và `lib/places.ts` sang một database thật (Postgres qua Vercel Postgres/Neon) khi cần nhiều người cùng biên tập hoặc số lượng bài lớn.
- Thêm trang quản trị (CRUD + đăng nhập) để biên tập viên tự thêm bài mà không cần sửa code.
- Tự động kéo bài từ các trang tin/blog Đài Loan có RSS công khai (không đụng tới Instagram/Threads) để giảm công sức nhập liệu.

## Công nghệ

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.
