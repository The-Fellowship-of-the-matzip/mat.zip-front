import * as S from "./Divider.style";

export interface DividerProps {
  thickness?: number;
}

function Divider({ thickness = 1 }: DividerProps) {
  return <S.Divider thickness={thickness} />;
}

export default Divider;
