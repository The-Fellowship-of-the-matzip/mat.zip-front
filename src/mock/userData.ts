import type { UserReview } from "types/common";
import type { BookmarkStore } from "types/common/bookmarkTypes";

export const userProfile = {
  username: "huni",
  profileImage:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  reviewCount: 4,
  averageRating: 3.0,
};

export const bookmarkedStores: BookmarkStore[] = [
  {
    id: 1,
    name: "냠냠 치킨",
    address: "서울 강남구 선릉로86길 5-4 1층",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
    rating: 3,
    reviewCount: 34,
    liked: true,
  },
  {
    id: 2,
    name: "얌얌 치킨",
    address: "서울 강남구 역삼로65길 31",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    distance: 0.5,
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
    rating: 3,
    reviewCount: 3,
    liked: true,
  },
];

export const userReviews: UserReview[] = [
  {
    id: 1,
    restaurant: {
      id: 2,
      name: "맛있는 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "맛있어요",
    rating: 4,
    menu: "맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    updatable: true,
  },
  {
    id: 2,
    restaurant: {
      id: 3,
      name: "올로ㅗㄹ 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "더 맛있어요",
    rating: 5,
    menu: "더 맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    updatable: true,
  },
  {
    id: 3,
    restaurant: {
      id: 3,
      name: "우에에ㅔㄱ 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "더 맛있어요",
    rating: 5,
    menu: "더 맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    updatable: true,
  },
  {
    id: 4,
    restaurant: {
      id: 3,
      name: "냐아앙ㅁ 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "더 맛있어요",
    rating: 5,
    menu: "더 맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    updatable: true,
  },
  {
    id: 5,
    restaurant: {
      id: 3,
      name: "뇨오옴 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "더 맛있어요",
    rating: 5,
    menu: "더 맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    updatable: true,
  },
  {
    id: 6,
    restaurant: {
      id: 3,
      name: "룰랄룰 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "더 맛있어요",
    rating: 5,
    menu: "더 맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    updatable: true,
  },
  {
    id: 7,
    restaurant: {
      id: 3,
      name: "크아악 식당",
      imageUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    content: "더 맛있어요",
    rating: 5,
    menu: "더 맛있는 메뉴",
    imageUrl:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    updatable: true,
  },
];
