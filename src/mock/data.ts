import { Review, Store, StoreDemand } from "types/common";

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
    reviewCount: 34,
    liked: false,
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
    reviewCount: 12,
    liked: true,
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
    reviewCount: 5,
    liked: true,
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
    reviewCount: 3,
    liked: false,
  },
  {
    id: 5,
    name: "뇸뇸 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 0,
    reviewCount: 0,
    liked: false,
  },
  {
    id: 6,
    name: "대박 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 1.5,
    reviewCount: 12,
    liked: true,
  },
  {
    id: 7,
    name: "냠냠 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 5,
    reviewCount: 9,
    liked: true,
  },
  {
    id: 8,
    name: "얌얌 치킨",
    address: "서울 강남구 역삼로65길 31",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
    reviewCount: 0,
    liked: true,
  },
  {
    id: 9,
    name: "념념 치킨",
    address: "서울 강남구 선릉로86길 30 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
    reviewCount: 6,
    liked: false,
  },
  {
    id: 10,
    name: "욤욤 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
    reviewCount: 4,
    liked: true,
  },
  {
    id: 11,
    name: "뇸뇸 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
    reviewCount: 3,
    liked: false,
  },
  {
    id: 12,
    name: "대박 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    kakaoMapUrl: "https://place.map.kakao.com/18283045",
    rating: 3,
    reviewCount: 5,
    liked: true,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    author: {
      username: "huni",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      reviewCount: 3,
      averageRating: 3.5,
    },
    content:
      "교촌 레드 너무 맛있어요. 그런데 레드 말고 다른 맛은 잘 모르겠어요, 그런데 레드가 너무 맛있으니까 또 먹으러 가고 싶은 것 같기도 하고 아닌 것 같기도 하고 잘 모르겠네요.",
    rating: 3,
    menu: "무 닭볶음탕 (중)",
    imageUrl: null,
    updatable: false,
  },
  {
    id: 2,
    author: {
      username: "ori",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      reviewCount: 4,
      averageRating: 2.5,
    },
    content: "정말 맛있어요!!",
    rating: 5,
    imageUrl:
      "https://ak-d.tripcdn.com/images/1mj2y12000ahpms1c8A29_C_800_600_R5.jpg_.webp?proc=autoorient",
    menu: "무 닭볶음탕 (중)",
    updatable: false,
  },
  {
    id: 3,
    author: {
      username: "huni",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      reviewCount: 1,
      averageRating: 3.0,
    },
    content: "걍 그럼",
    rating: 3,
    menu: "무 닭볶음탕 (중)",
    imageUrl: null,
    updatable: false,
  },
  {
    id: 4,
    author: {
      username: "ori",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      reviewCount: 16,
      averageRating: 4.5,
    },
    content: "정말 맛있어요!!",
    rating: 5,
    menu: "무 닭볶음탕 (중)",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    updatable: false,
  },
  {
    id: 5,
    author: {
      username: "huni",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      reviewCount: 4,
      averageRating: 3.0,
    },
    content: "걍 그럼",
    rating: 3,
    menu: "무 닭볶음탕 (중)",
    imageUrl:
      "https://ak-d.tripcdn.com/images/1mj2y12000ahpms1c8A29_C_800_600_R5.jpg_.webp?proc=autoorient",
    updatable: false,
  },
  {
    id: 6,
    author: {
      username: "ori",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      reviewCount: 3,
      averageRating: 3.5,
    },
    content: "정말 맛있어요!!",
    rating: 5,
    menu: "무 닭볶음탕 (중)",
    imageUrl: null,
    updatable: false,
  },
];

export const storeRequests: StoreDemand[] = [
  {
    id: "1",
    categoryId: "1",
    name: "식당이름1",
    author: "블링",
    isAuthor: true,
    isRegistered: false,
  },
  {
    id: "2",
    categoryId: "2",
    name: "식당이름2",
    author: "후니",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "3",
    categoryId: "3",
    name: "식당이름3",
    author: "태태",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "4",
    categoryId: "4",
    name: "식당이름4",
    author: "오리",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "5",
    categoryId: "5",
    name: "식당이름5식당이름5 식당이름5식당이름5식당이름5 식당이름5식당이름5식당이름5",
    author: "샐리",
    isAuthor: false,
    isRegistered: true,
  },
  {
    id: "6",
    categoryId: "6",
    name: "식당이름6",
    author: "오찌",
    isAuthor: false,
    isRegistered: true,
  },
  {
    id: "7",
    categoryId: "1",
    name: "식당이름1",
    author: "블링",
    isAuthor: true,
    isRegistered: false,
  },
  {
    id: "8",
    categoryId: "2",
    name: "식당이름2",
    author: "후니",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "9",
    categoryId: "3",
    name: "식당이름3",
    author: "태태",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "10",
    categoryId: "4",
    name: "식당이름4",
    author: "오리",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "11",
    categoryId: "5",
    name: "식당이름5식당이름5 식당이름5식당이름5식당이름5 식당이름5식당이름5식당이름5",
    author: "샐리",
    isAuthor: false,
    isRegistered: true,
  },
  {
    id: "12",
    categoryId: "6",
    name: "식당이름6",
    author: "오찌",
    isAuthor: false,
    isRegistered: true,
  },
  {
    id: "13",
    categoryId: "1",
    name: "식당이름1",
    author: "블링",
    isAuthor: true,
    isRegistered: false,
  },
  {
    id: "14",
    categoryId: "2",
    name: "식당이름2",
    author: "후니",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "15",
    categoryId: "3",
    name: "식당이름3",
    author: "태태",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "16",
    categoryId: "4",
    name: "식당이름4",
    author: "오리",
    isAuthor: false,
    isRegistered: false,
  },
  {
    id: "17",
    categoryId: "5",
    name: "식당이름5식당이름5 식당이름5식당이름5식당이름5 식당이름5식당이름5식당이름5",
    author: "샐리",
    isAuthor: false,
    isRegistered: true,
  },
  {
    id: "18",
    categoryId: "6",
    name: "식당이름6",
    author: "오찌",
    isAuthor: false,
    isRegistered: true,
  },
];
