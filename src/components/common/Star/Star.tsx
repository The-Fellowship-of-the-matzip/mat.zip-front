import { PropsWithChildren } from "react";
import { StarSize } from "types/ui";

import * as S from "components/common/Star/Star.style";

import { theme } from "style/Theme";

export interface StarProps extends PropsWithChildren<{}> {
  isFilled?: boolean;
  size?: StarSize;
}

function Star({ isFilled = false, size = "md" }: StarProps) {
  return (
    <S.Star
      size={size}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isFilled ? (
        <path
          d="M12 18.2647L5.07772 21.9042L6.40005 14.1956L0.800049 8.73697L8.53888 7.61315L12 0.599976L15.4612 7.61315L23.2 8.73697L17.6 14.1956L18.9224 21.9042L12 18.2647Z"
          fill={theme.color.yellow}
          stroke={theme.color.yellow}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ) : (
        <path
          d="M12 18.2647L5.07772 21.9042L6.40005 14.1956L0.800049 8.73697L8.53888 7.61315L12 0.599976L15.4612 7.61315L23.2 8.73697L17.6 14.1956L18.9224 21.9042L12 18.2647Z"
          stroke={theme.color.yellow}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </S.Star>
  );
}

export default Star;
