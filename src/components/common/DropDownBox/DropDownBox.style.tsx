import styled, { css } from "styled-components";

import type { DropDownBoxProps } from "components/common/DropDownBox/DropDownBox";

export const DropDownBox = styled.div<
  Pick<DropDownBoxProps, "top" | "bottom" | "left" | "right">
>`
  ${({ theme, top, bottom, left, right }) => css`
    position: absolute;
    ${top && `top: ${top};`}
    ${bottom && `bottom: ${bottom};`}
    ${left && `left: ${left};`}
    ${right && `right: ${right};`}
    z-index: 3;
    white-space: nowrap;

    border: 1px solid ${theme.secondary};
    border-radius: 0.3rem;
    background-color: ${theme.white};

    transform-origin: top;
    animation: slide-down 0.1s ease;
    @keyframes slide-down {
      0% {
        transform: scale(1, 0);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  `}
`;
