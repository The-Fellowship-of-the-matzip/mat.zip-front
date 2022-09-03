const categories = {
  1: "한식",
  2: "중식/아시안",
  3: "일식",
  4: "양식",
  5: "샌드위치/샐러드",
  6: "고기",
  8: "술/안주",
  7: "카페/디저트",
} as const;

type StoreRequest = {
  categoryId: keyof typeof categories;
  name: string;
  isRegistered: boolean;
  isAuthor: boolean;
};
