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

export interface Review {
  id: number;
  author: {
    username: string;
    profileImage: string;
  };
  content: string;
  rating: number;
  menu: string;
  updatable: boolean;
}

export type ReviewShape = {
  id: string;
  author: {
    username: string;
    profileImage: string;
  };
  content: string;
  rating: number;
  menu: string;
  updatable: boolean;
};
