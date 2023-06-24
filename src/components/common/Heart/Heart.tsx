import * as S from "./Heart.style";
import { PropsWithChildren } from "react";
import { HeartSize } from "types/ui";

import { theme } from "style/Theme";

export interface HeartProps extends PropsWithChildren<{}> {
  isFilled?: boolean;
  size?: HeartSize;
}

function Star({ isFilled = false, size = "md" }: HeartProps) {
  return (
    <S.Heart
      size={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isFilled ? (
        <path
          d="M2.04737 10.0474L9.99999 18L17.9526 10.0474C18.8367 9.16332 19.3333 7.96429 19.3333 6.71405C19.3333 4.11055 17.2228 2 14.6193 2C13.369 2 12.17 2.49666 11.2859 3.38071L9.99999 4.66667L8.71403 3.38071C7.82998 2.49666 6.63094 2 5.3807 2C2.77721 2 0.666656 4.11055 0.666656 6.71405C0.666656 7.96429 1.16331 9.16332 2.04737 10.0474Z"
          fill={theme.color.red}
          stroke={theme.color.red}
          stroke-linejoin="round"
        />
      ) : (
        <path
          d="M2.04737 10.0474L9.99999 18L17.9526 10.0474C18.8367 9.16332 19.3333 7.96429 19.3333 6.71405C19.3333 4.11055 17.2228 2 14.6193 2C13.369 2 12.17 2.49666 11.2859 3.38071L9.99999 4.66667L8.71403 3.38071C7.82998 2.49666 6.63094 2 5.3807 2C2.77721 2 0.666656 4.11055 0.666656 6.71405C0.666656 7.96429 1.16331 9.16332 2.04737 10.0474Z"
          stroke={theme.color.red}
          stroke-linejoin="round"
        />
      )}
    </S.Heart>
  );
}

export default Star;
