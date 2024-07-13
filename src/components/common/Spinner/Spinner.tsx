import * as S from "components/common/Spinner/Spinner.style";

export type SpinnerPosition = "static" | "fixed";

interface SpinnerProps {
  position?: SpinnerPosition;
}

function Spinner({ position = "fixed" }: SpinnerProps) {
  return (
    <S.SpinnerContainer $position={position}>
      <S.SpinDiv />
    </S.SpinnerContainer>
  );
}

export default Spinner;
