import { SpinnerPosition } from "./Spinner";

import styled, { css } from "styled-components";

export const SpinnerContainer = styled.div<{ $position: SpinnerPosition }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $position }) =>
    $position === "static" &&
    css`
      padding: 2rem 0;
    `}

  ${({ $position }) =>
    $position === "fixed" &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `}
`;

export const SpinDiv = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  border: 0.5rem solid ${({ theme }) => theme.color.primary};
  border-right-color: transparent;
  border-left-color: transparent;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
