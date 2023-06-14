import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Campus } from "types/commonTypes";

import CAMPUS from "constants/campus";
import { PATHNAME } from "constants/routes";

import { setCampusContext } from "context/CampusContextProvider";

import * as S from "components/pages/CampusSelectPage/CampusSelectPage.style";

function CampusSelectPage() {
  const setCampus = useContext(setCampusContext);
  const navigate = useNavigate();

  const handleCampusSelect: (campus: Campus) => React.MouseEventHandler =
    (campus: Campus) => () => {
      setCampus(campus);
      navigate(PATHNAME.HOME);
    };

  return (
    <S.MainContainer>
      <S.Title>캠퍼스를 선택해주세요</S.Title>
      <S.ButtonWrapper>
        <S.Button onClick={handleCampusSelect(CAMPUS.JAMSIL.name)}>
          {CAMPUS.JAMSIL.name}
        </S.Button>
        <S.Button onClick={handleCampusSelect(CAMPUS.SEOULLEUNG.name)}>
          {CAMPUS.SEOULLEUNG.name}
        </S.Button>
      </S.ButtonWrapper>
    </S.MainContainer>
  );
}

export default CampusSelectPage;
