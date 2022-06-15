import * as S from "components/common/Chip/Chip.style";

export interface ChipProps {
  children: string;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Chip({ children, isSelected, onClick }: ChipProps) {
  return (
    <S.ChipContainer isSelected={isSelected} onClick={onClick}>
      {children}
    </S.ChipContainer>
  );
}

export default Chip;
