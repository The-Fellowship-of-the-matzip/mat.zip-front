import { Author } from "./authorTypes";

export interface ReviewInputShape {
  content: string;
  rating: number;
  menu: string;
}

export interface ReviewDetailShape extends ReviewInputShape {
  author: Author;
  updatable: boolean;
}

export interface Review extends ReviewDetailShape {
  id: number;
}

export interface ReviewShape extends ReviewDetailShape {
  id: string;
}
