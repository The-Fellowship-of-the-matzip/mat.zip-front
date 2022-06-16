import * as S from "components/common/Star/Star.style";

const EMPTY_STAR_ICON = "\u2606";
const FILLED_STAR_ICON = "\u2605";

function Star({ isFilled = false }) {
  return (
    <S.StarContainer>
      {isFilled ? FILLED_STAR_ICON : EMPTY_STAR_ICON}
    </S.StarContainer>
  );
}

export default Star;
