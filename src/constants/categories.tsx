import {
  AlcoholCategoryIcon,
  CafeCategoryIcon,
  ChineseCategoryIcon,
  JapaneseCategoryIcon,
  KoreanCategoryIcon,
  MeatCategoryIcon,
  SaladCategoryIcon,
  WesternCategoryIcon,
} from "asset/categoryIcons";
import type { Category } from "types/common";

export const categories = {
  1: "한식",
  2: "중식/아시안",
  3: "일식",
  4: "양식",
  5: "샌드위치/샐러드",
  6: "고기",
  8: "술/안주",
  7: "카페/디저트",
} as const;

export const CATEGORY_ICONS: Record<Category, JSX.Element> = {
  한식: <KoreanCategoryIcon />,
  "중식/아시안": <ChineseCategoryIcon />,
  일식: <JapaneseCategoryIcon />,
  양식: <WesternCategoryIcon />,
  "샌드위치/샐러드": <SaladCategoryIcon />,
  고기: <MeatCategoryIcon />,
  "술/안주": <AlcoholCategoryIcon />,
  "카페/디저트": <CafeCategoryIcon />,
} as const;
