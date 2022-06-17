import { campusContext, setCampusContext } from "context/CampusContextProvider";
import { useContext } from "react";
import ReactDOM from "react-dom";

import * as S from "components/layout/MenuDrawer/MenuDrawer.style";

type Props = { closeMenu: () => void; isLogin: boolean };

function MenuDrawer({ closeMenu, isLogin }: Props) {
  const campus = useContext(campusContext);
  const setCampus = useContext(setCampusContext);

  const handleCampusChangeRequest = () => {
    if (
      window.confirm(
        `현재 선택된 캠퍼스는 ${campus}입니다 캠퍼스를 변경하시겠습니까?`
      )
    ) {
      setCampus(null);
    }
  };

  return ReactDOM.createPortal(
    <S.Container>
      <S.Backdrop onClick={closeMenu} />
      <S.Content>
        {isLogin ? (
          <>
            <S.Title>어서오세요 샐리님</S.Title>
            <S.Button onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </S.Button>
            <S.Button>로그아웃</S.Button>
          </>
        ) : (
          <>
            <S.Title>로그인을 해주세요</S.Title>

            <S.Button onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </S.Button>
            <S.Button>로그인</S.Button>
          </>
        )}
      </S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement
  );
}

export default MenuDrawer;
