import styled, { css } from "styled-components";

import type { ChipProps } from "components/common/Chip/Chip";

export const ChipContainer = styled.button<Partial<ChipProps>>`
  padding: 8px 12px;
  font-size: 14px;

  ${({ theme }) => css`
    background-color: ${theme.color.primaryLight1};
    border: 1px solid ${theme.color.primary};
  `}

  border-radius: ${({ theme }) => theme.borderRadius.small};
`;
