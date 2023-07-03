type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TextSize = Extract<Size, "xs" | "sm" | "md" | "lg">;

export type StarSize = Extract<Size, "xs" | "sm" | "md" | "lg">;

export type HeartSize = Extract<Size, "sm" | "md">;

export type HeadingSize = Size;
