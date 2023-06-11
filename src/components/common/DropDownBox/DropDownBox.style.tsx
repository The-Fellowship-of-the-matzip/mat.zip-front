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

    border: 1px solid ${theme.color.gray200};
    border-radius: ${theme.borderRadius.small};
    background-color: ${theme.color.white};

    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
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
