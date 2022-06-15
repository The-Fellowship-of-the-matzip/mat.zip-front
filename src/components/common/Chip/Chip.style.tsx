import styled from "styled-components";

import type { ChipProps } from "components/common/Chip/Chip";

export const ChipContainer = styled.button<Partial<ChipProps>>`
  padding: 0.5rem 1.5rem;

  ${({ theme, isSelected }) => `
    background-color: ${isSelected ? theme.primary : theme.white};
    border: 0.065rem solid ${isSelected ? theme.primary : theme.secondary};
    color: ${isSelected ? theme.white : theme.black};
  `}
  border-radius: 1.5rem;

  &:hover {
    opacity: 0.9;
  }
`;
