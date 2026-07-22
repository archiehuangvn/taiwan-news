export type PlaceCategory = "an-uong" | "check-in";

export type SourcePlatform = "instagram" | "threads" | "website";

export type Place = {
  slug: string;
  title: string;
  descriptionVi: string;
  category: PlaceCategory;
  city: string;
  sourcePlatform: SourcePlatform;
  sourceName: string;
  sourceUrl: string;
  imageUrl: string;
  publishedAt: string; // ISO date
};

export const placeCategoryLabels: Record<PlaceCategory, string> = {
  "an-uong": "Ăn uống",
  "check-in": "Check-in",
};

export const places: Place[] = [
  {
    slug: "mua-den-chua-nguyen-thuy-cau-jiufen",
    title: "Cầu treo Jiufen về đêm",
    descriptionVi:
      "Con phố đèn lồng đỏ nổi tiếng ở Jiufen (Cửu Phần) lên đèn từ chiều tối, tạo khung cảnh được cho là nguồn cảm hứng của phim hoạt hình \"Spirited Away\". Nên đến trước 17h để tránh đông và có chỗ chụp ảnh đẹp ở khu vực trà quán A-Mei.",
    category: "check-in",
    city: "Tân Bắc (Jiufen)",
    sourcePlatform: "instagram",
    sourceName: "@taiwan.trip.diary",
    sourceUrl: "https://www.instagram.com/p/example-jiufen/",
    imageUrl: "https://images.unsplash.com/photo-1598935888738-cd2622bb9280?w=1200&q=80",
    publishedAt: "2026-07-20T10:00:00+08:00",
  },
  {
    slug: "beitou-suoi-nuoc-nong-thermal-valley",
    title: "Thung lũng địa nhiệt Beitou (Bắc Đầu)",
    descriptionVi:
      "\"Thung lũng địa ngục\" Beitou với làn hơi nước bốc nghi ngút và hồ nước khoáng xanh ngọc là điểm check-in miễn phí ngay trong thành phố Đài Bắc, đi MRT tới ga Xinbeitou là tới. Gần đó có nhiều nhà tắm suối nước nóng công cộng giá rẻ.",
    category: "check-in",
    city: "Đài Bắc (Beitou)",
    sourcePlatform: "website",
    sourceName: "Taiwan Tourism Bureau",
    sourceUrl: "https://www.taiwan.net.tw",
    imageUrl: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=1200&q=80",
    publishedAt: "2026-07-19T09:00:00+08:00",
  },
  {
    slug: "quan-mi-bo-kho-lin-dong-yuan",
    title: "Mì bò kho Lin Dong Fang gần ga Đài Bắc",
    descriptionVi:
      "Quán mì bò 40 năm tuổi luôn đông khách xếp hàng, nước dùng hầm xương đậm đà, thịt bò mềm. Giá khoảng 150-200 Đài tệ/tô, mở cửa tới khuya nên rất tiện cho ca đêm. Nhiều bạn Việt làm ở khu vực Đài Bắc hay ghé sau giờ tan ca.",
    category: "an-uong",
    city: "Đài Bắc",
    sourcePlatform: "threads",
    sourceName: "@foodie.taipei",
    sourceUrl: "https://www.threads.net/@foodie.taipei/post/example-mibo",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80",
    publishedAt: "2026-07-18T12:30:00+08:00",
  },
  {
    slug: "cho-dem-ninh-hạ-an-vat",
    title: "Chợ đêm Ninh Hạ (Ningxia) - thiên đường ăn vặt",
    descriptionVi:
      "Chợ đêm ngắn nhưng dày đặc món ngon: trứng hàu, gà rán Đài Loan, chè đậu đỏ, mì trộn. Ít khách du lịch nước ngoài hơn Shilin nên giá bình dân và đúng chất địa phương hơn. Nên đi tay không để dễ len lỏi giữa các gian hàng.",
    category: "an-uong",
    city: "Đài Bắc (Ningxia)",
    sourcePlatform: "instagram",
    sourceName: "@eat.taipei.now",
    sourceUrl: "https://www.instagram.com/p/example-ningxia/",
    imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1200&q=80",
    publishedAt: "2026-07-17T18:00:00+08:00",
  },
  {
    slug: "ho-nhat-nguyet-sun-moon-lake",
    title: "Hồ Nhật Nguyệt (Sun Moon Lake) mùa hè",
    descriptionVi:
      "Hồ nước ngọt lớn nhất Đài Loan với mặt nước xanh biếc bao quanh bởi núi non. Có thể đi thuyền, đạp xe quanh hồ hoặc đi cáp treo Ropeway ngắm toàn cảnh. Thời điểm sáng sớm sương mù giăng trên mặt hồ cho ảnh check-in đẹp nhất.",
    category: "check-in",
    city: "Nam Đầu (Sun Moon Lake)",
    sourcePlatform: "website",
    sourceName: "Sun Moon Lake National Scenic Area",
    sourceUrl: "https://www.sunmoonlake.gov.tw",
    imageUrl: "https://images.unsplash.com/photo-1544365558-35aa4afcf11e?w=1200&q=80",
    publishedAt: "2026-07-16T08:00:00+08:00",
  },
  {
    slug: "quan-tra-sua-tra-quan-dai-loan-nguyen-ban",
    title: "Trà sữa trân châu đường đen nguyên bản",
    descriptionVi:
      "Quán trà nhỏ theo công thức gia truyền, trân châu nấu mỗi 2 tiếng để luôn dẻo nóng, không dùng trân châu để qua đêm. Ít nổi tiếng với khách nước ngoài nhưng được dân địa phương xếp hạng cao trên các hội nhóm ẩm thực Đài Loan.",
    category: "an-uong",
    city: "Đài Trung",
    sourcePlatform: "threads",
    sourceName: "@taichung.eats",
    sourceUrl: "https://www.threads.net/@taichung.eats/post/example-trasua",
    imageUrl: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=1200&q=80",
    publishedAt: "2026-07-15T15:00:00+08:00",
  },
];

export function getAllPlaces(): Place[] {
  return [...places].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPlacesByCategory(category: PlaceCategory | "all"): Place[] {
  const all = getAllPlaces();
  if (category === "all") return all;
  return all.filter((p) => p.category === category);
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}
