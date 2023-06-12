import { getSizeStyling } from "../Input/Input.style";
import type { SelectProps } from "./Select";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacer.spacing2};
`;

export const Select = styled.select<Omit<SelectProps, "children">>`
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

export const SupportingText = styled.p<Omit<SelectProps, "children">>`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme, isError = false }) =>
    isError ? theme.color.redDark : theme.color.gray600};
`;
