import { categories } from "constants/categories";

export type CategoryId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type Category = typeof categories[keyof typeof categories];
