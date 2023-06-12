type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TextSize = Extract<Size, "xs" | "sm" | "md" | "lg">;

export type HeadingSize = Size;
