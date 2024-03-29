import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Campus } from "types/common";

import { CAMPUS } from "constants/campus";
import { PATHNAME } from "constants/routes";

import { setCampusContext } from "context/CampusContextProvider";

import Button from "components/common/Button/Button";
import Heading from "components/common/Heading/Heading";

import * as S from "components/pages/CampusSelectPage/CampusSelectPage.style";
import { LogoLight } from "asset";

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
      <S.LogoWrapper>
        <LogoLight />
      </S.LogoWrapper>
      <Heading size="sm">식사할 캠퍼스를 선택해 주세요</Heading>
      <S.ButtonWrapper>
        <Button
          variant="primary"
          css={S.buttonStyle}
          onClick={handleCampusSelect(CAMPUS.JAMSIL.name)}
        >
          {CAMPUS.JAMSIL.name}
        </Button>
        <Button
          variant="primary"
          css={S.buttonStyle}
          onClick={handleCampusSelect(CAMPUS.SEOULLEUNG.name)}
        >
          {CAMPUS.SEOULLEUNG.name}
        </Button>
      </S.ButtonWrapper>
    </S.MainContainer>
  );
}

export default CampusSelectPage;
