type Size = "xSmall" | "small" | "medium" | "large" | "xLarge" | "xxLarge";

export type TextSize = Extract<Size, "xSmall" | "small" | "medium" | "large">;

export type HeadingSize = Size;
