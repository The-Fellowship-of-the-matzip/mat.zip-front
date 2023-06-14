export type CampusId = 1 | 2;
export type Campus = "잠실" | "선릉";

export interface Store {
  id: number;
  name: string;
  address: string;
  distance: number;
  kakaoMapUrl: string;
  imageUrl: string;
  rating: number;
}

export interface Author {
  username: string;
  profileImage: string;
}

export interface Review extends ReviewDetailShape {
  id: number;
}

export interface ReviewShape extends ReviewDetailShape {
  id: string;
}

export interface ReviewInputShape {
  content: string;
  rating: number;
  menu: string;
}

export interface ReviewDetailShape extends ReviewInputShape {
  author: Author;
  updatable: boolean;
}
