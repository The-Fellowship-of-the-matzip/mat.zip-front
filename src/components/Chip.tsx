import styled from "styled-components";

interface ChipProps {
  children: string;
  isSelected?: boolean;
}

const ChipContainer = styled.button<Partial<ChipProps>>`
  padding: 0.5em 1.5em;

  ${({ theme, isSelected }) => `
    background-color: ${isSelected ? theme.primary : theme.white};
    border: 1px solid ${isSelected ? theme.primary : theme.secondary};
    color: ${isSelected ? theme.white : theme.black};
  `}
  border-radius: 1.5em;

  &:hover {
    opacity: 0.9;
  }
`;

function Chip({ children, isSelected }: ChipProps) {
  return <ChipContainer isSelected={isSelected}>{children}</ChipContainer>;
}

export default Chip;
