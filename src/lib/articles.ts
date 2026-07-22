export type Category = "Thời sự" | "Kinh tế" | "Đời sống" | "Thời tiết" | "Chính sách";

export type Article = {
  slug: string;
  title: string;
  summaryVi: string;
  category: Category;
  sourceName: string;
  sourceUrl: string;
  imageUrl: string;
  publishedAt: string; // ISO date
  postedToFb: boolean;
};

export const articles: Article[] = [
  {
    slug: "bao-so-8-huong-vao-dai-loan",
    title: "Cảnh báo bão số 8 có thể ảnh hưởng miền đông Đài Loan cuối tuần này",
    summaryVi:
      "Cục Khí tượng Trung ương Đài Loan (CWA) cho biết một áp thấp nhiệt đới đang mạnh lên thành bão và có khả năng ảnh hưởng tới khu vực Hoa Liên, Đài Đông vào cuối tuần. Người lao động và du học sinh Việt Nam tại các khu vực này nên theo dõi thông báo nghỉ làm, nghỉ học từ chính quyền địa phương và chuẩn bị nhu yếu phẩm cần thiết.",
    category: "Thời tiết",
    sourceName: "CWA / Focus Taiwan",
    sourceUrl: "https://focustaiwan.tw",
    imageUrl: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80",
    publishedAt: "2026-07-22T09:00:00+08:00",
    postedToFb: false,
  },
  {
    slug: "tsmc-cong-bo-loi-nhuan-quy-2",
    title: "TSMC công bố lợi nhuận quý 2 tăng mạnh nhờ nhu cầu chip AI",
    summaryVi:
      "Tập đoàn sản xuất chip TSMC vừa công bố lợi nhuận quý 2 vượt kỳ vọng thị trường nhờ nhu cầu chip phục vụ trí tuệ nhân tạo tăng cao. Đây là tín hiệu tích cực cho ngành công nghiệp bán dẫn Đài Loan, nơi có đông đảo lao động nước ngoài, trong đó có nhiều lao động Việt Nam đang làm việc tại các nhà máy vệ tinh.",
    category: "Kinh tế",
    sourceName: "CNA",
    sourceUrl: "https://www.cna.com.tw",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    publishedAt: "2026-07-21T14:30:00+08:00",
    postedToFb: false,
  },
  {
    slug: "tang-luong-co-ban-2027",
    title: "Đài Loan dự kiến tăng lương cơ bản từ năm 2027",
    summaryVi:
      "Bộ Lao động Đài Loan đang thảo luận phương án tăng mức lương cơ bản áp dụng từ năm 2027, nhằm ứng phó với chi phí sinh hoạt tăng cao. Nếu được thông qua, mức lương tối thiểu mới sẽ ảnh hưởng trực tiếp đến hàng trăm nghìn lao động di trú, bao gồm lao động Việt Nam trong các ngành sản xuất, chăm sóc và nông nghiệp.",
    category: "Chính sách",
    sourceName: "Taipei Times",
    sourceUrl: "https://www.taipeitimes.com",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    publishedAt: "2026-07-21T08:15:00+08:00",
    postedToFb: false,
  },
  {
    slug: "mrt-taipei-mo-tuyen-moi",
    title: "Tuyến MRT mới tại Đài Bắc dự kiến khai trương cuối năm nay",
    summaryVi:
      "Chính quyền thành phố Đài Bắc thông báo tuyến metro mới kết nối khu vực ngoại ô với trung tâm thành phố sẽ đi vào hoạt động vào cuối năm nay, giúp giảm thời gian di chuyển cho người lao động và sinh viên sống ở vùng ven.",
    category: "Đời sống",
    sourceName: "Taipei Times",
    sourceUrl: "https://www.taipeitimes.com",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    publishedAt: "2026-07-20T11:00:00+08:00",
    postedToFb: false,
  },
  {
    slug: "bao-hiem-y-te-nhcov-cap-nhat",
    title: "Cập nhật quy định bảo hiểm y tế toàn dân (NHI) áp dụng cho lao động nước ngoài",
    summaryVi:
      "Cơ quan Bảo hiểm Y tế Đài Loan vừa công bố một số điều chỉnh về thủ tục đăng ký và mức đóng bảo hiểm y tế toàn dân (NHI) áp dụng từ tháng sau, có ảnh hưởng đến lao động nước ngoài mới nhập cảnh, bao gồm thời gian chờ được hưởng bảo hiểm.",
    category: "Chính sách",
    sourceName: "CNA",
    sourceUrl: "https://www.cna.com.tw",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    publishedAt: "2026-07-19T16:45:00+08:00",
    postedToFb: false,
  },
  {
    slug: "gia-thuc-pham-tang-thang-7",
    title: "Giá rau củ tại các chợ truyền thống tăng do ảnh hưởng thời tiết",
    summaryVi:
      "Giá một số loại rau củ tại các chợ truyền thống ở Đài Bắc và Đào Viên tăng 10-15% trong tuần qua do mưa lớn ảnh hưởng đến nguồn cung. Các tiểu thương dự báo giá có thể ổn định trở lại sau hai tuần tới.",
    category: "Kinh tế",
    sourceName: "Focus Taiwan",
    sourceUrl: "https://focustaiwan.tw",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    publishedAt: "2026-07-19T07:30:00+08:00",
    postedToFb: false,
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDateVi(iso: string): string {
  return new Date(iso).toLocaleString("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Taipei",
  });
}
