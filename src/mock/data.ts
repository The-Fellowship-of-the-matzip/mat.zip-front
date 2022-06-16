export interface Store {
  id: number;
  name: string;
  address: string;
  distance: number;
  kakaoMapUrl: string;
  imageUrl: string;
  rating: number;
}

export interface Review {
  id: number;
  reviewAuthor: {
    username: string;
    profileImage: string;
  };
  content: string;
  rating: number;
  menu: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "냠냠 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
  },
  {
    id: 2,
    name: "얌얌 치킨",
    address: "서울 강남구 역삼로65길 31",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
  },
  {
    id: 3,
    name: "념념 치킨",
    address: "서울 강남구 선릉로86길 30 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
  },
  {
    id: 4,
    name: "욤욤 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
  },
  {
    id: 5,
    name: "뇸뇸 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
  },
  {
    id: 6,
    name: "대박 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    reviewAuthor: {
      username: "huni",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    content: "걍 그럼",
    rating: 3,
    menu: "무 닭볶음탕 (중)",
  },
  {
    id: 2,
    reviewAuthor: {
      username: "ori",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    content: "정말 맛있어요!!",
    rating: 5,
    menu: "무 닭볶음탕 (중)",
  },
];
