import type { InputProps } from "./Input";

import styled, { css } from "styled-components";

export const getSizeStyling = (size: Required<InputProps>["$size"]) => {
  const style = {
    small: css`
      padding: 0.8rem 1.2rem;
      font-size: 1.4rem;
    `,
    medium: css`
      padding: 1.4rem;
      font-size: 1.6rem;
    `,
    large: css`
      padding: 1.6rem 1.4rem;
      font-size: 1.6rem;
    `,
  };

  return style[size];
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray800};
  border: 1px solid ${({ theme }) => theme.color.gray100};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ isError }) =>
    isError &&
    css`
      background-color: ${({ theme }) => theme.color.redLight};
      color: ${({ theme }) => theme.color.gray800};
      border: 1px solid ${({ theme }) => theme.color.redDark};

      &:focus {
        border: 1px solid ${({ theme }) => theme.color.redDark};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.redLight1};
      }
    `}

  ${({ $size = "medium" }) => getSizeStyling($size)}
  ${(props) => props.css}

  &:focus {
    outline: 0;
  }
`;

export const SupportingText = styled.p<InputProps>`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme, isError = false }) =>
    isError ? theme.color.redDark : theme.color.gray600};
`;
