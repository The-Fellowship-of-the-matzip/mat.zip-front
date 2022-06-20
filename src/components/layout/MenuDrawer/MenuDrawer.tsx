import { useContext } from "react";
import ReactDOM from "react-dom";

import { campusContext, setCampusContext } from "context/CampusContextProvider";
import { setLoginContext } from "context/LoginContextProvider";

import * as S from "components/layout/MenuDrawer/MenuDrawer.style";

type Props = { closeMenu: () => void; isLogin: boolean };

function MenuDrawer({ closeMenu, isLogin }: Props) {
  const campus = useContext(campusContext);
  const setCampus = useContext(setCampusContext);
  const setIsLogin = useContext(setLoginContext);

  const handleCampusChangeRequest = () => {
    if (
      !window.confirm(
        `현재 선택된 캠퍼스는 ${campus}입니다 캠퍼스를 변경하시겠습니까?`
      )
    ) {
      return;
    }
    setCampus(null);
  };

  const logout = () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return;
    }

    window.sessionStorage.removeItem("accessToken");
    setIsLogin(false);
    closeMenu();
    window.alert("로그아웃이 되었습니다");
  };

  return ReactDOM.createPortal(
    <S.Container>
      <S.Backdrop onClick={closeMenu} />
      <S.Content>
        {isLogin ? (
          <>
            <S.Title>어서오세요</S.Title>
            <S.Button onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </S.Button>
            <S.Button onClick={logout}>로그아웃</S.Button>
          </>
        ) : (
          <>
            <S.Title>로그인을 해주세요</S.Title>

            <S.Button onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </S.Button>
            <a href="https://github.com/login/oauth/authorize?client_id=a51717e6e0bb9e34da8e">
              로그인
            </a>
          </>
        )}
      </S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement
  );
}

export default MenuDrawer;
