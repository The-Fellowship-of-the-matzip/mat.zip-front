import styled from "styled-components";

import type { ChipProps } from "components/common/Chip/Chip";

export const ChipContainer = styled.button<Partial<ChipProps>>`
  padding: 8px 12px;
  font-size: 14px;

  ${({ theme, isSelected }) => `
    background-color: ${isSelected ? theme.color.primary : theme.color.white};
    border: 1px solid ${isSelected ? theme.color.primary : theme.color.gray200};
    color: ${isSelected ? theme.color.white : theme.color.gray800};
  `}

  border-radius: ${({ theme }) => theme.borderRadius.small};
`;
