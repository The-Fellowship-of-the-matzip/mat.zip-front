import type { ButtonProps } from "./Button";

import styled, { css } from "styled-components";

const getVariantStyling = (variant: Required<ButtonProps>["variant"]) => {
  const style = {
    default: css`
      background-color: ${({ theme }) => theme.color.gray100};
      color: ${({ theme }) => theme.color.gray800};
      border: 1px solid ${({ theme }) => theme.color.gray100};

      &:hover:enabled {
        background-color: ${({ theme }) => theme.color.gray200};
        border-color: ${({ theme }) => theme.color.gray200};
      }

      &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.gray200};
      }
    `,
    primary: css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.primary};

      &:hover:enabled {
        background-color: ${({ theme }) => theme.color.primaryDark};
        border-color: ${({ theme }) => theme.color.primaryDark};
      }

      &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primaryDark};
      }
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.primary};
      border: 1px solid ${({ theme }) => theme.color.primary};

      &:hover:enabled {
        background-color: ${({ theme }) => theme.color.primaryLight3};
        outline: 0 !important;
      }

      &:focus {
        background-color: ${({ theme }) => theme.color.primaryLight2};
        border: 1px solid ${({ theme }) => theme.color.primaryDark};
      }
    `,
    textButton: css`
      &:hover:enabled {
        background-color: ${({ theme }) => theme.color.gray100};
      }

      &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.gray100};
      }
    `,
    danger: css`
      background-color: ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.white};

      &:hover:enabled {
        background-color: ${({ theme }) => theme.color.redDark};
      }

      &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.redDark};
      }
    `,
  };

  return style[variant];
};

const getSizeStyling = (size: Required<ButtonProps>["size"]) => {
  const style = {
    small: css`
      padding: 0.8rem 1.2rem;
      font-size: 1.4rem;
      font-weight: 500;
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

export const Button = styled.button<ButtonProps>`
  width: 100%;
  background-color: transparent;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: 0 solid ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ variant = "default" }) => getVariantStyling(variant)}
  ${({ size = "medium" }) => getSizeStyling(size)}

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.white};
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) => props.css}
`;
