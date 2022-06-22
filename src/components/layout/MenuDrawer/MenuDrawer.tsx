import { useContext } from "react";
import ReactDOM from "react-dom";

import MESSAGES from "constants/messages";

import { campusContext, setCampusContext } from "context/CampusContextProvider";

import useLogin from "hooks/useLogin";

import * as S from "components/layout/MenuDrawer/MenuDrawer.style";

type Props = { closeMenu: () => void; isLoggedIn: boolean };

function MenuDrawer({ closeMenu, isLoggedIn }: Props) {
  const campus = useContext(campusContext);
  const setCampus = useContext(setCampusContext);

  const { logout } = useLogin();

  const handleCampusChangeRequest = () => {
    if (!window.confirm(MESSAGES.CAMPUS_CHANGE_CONFIRM(campus as string))) {
      return;
    }
    setCampus(null);
  };

  const handleLogout = () => {
    if (!window.confirm(MESSAGES.LOGOUT_CONFIRM)) {
      return;
    }

    logout();
    closeMenu();
    window.alert(MESSAGES.LOGOUT_COMPLETE);
  };

  return ReactDOM.createPortal(
    <S.Container>
      <S.Backdrop onClick={closeMenu} />
      <S.Content>
        {isLoggedIn ? (
          <>
            <S.Title>어서오세요</S.Title>
            <S.Button onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </S.Button>
            <S.Button onClick={handleLogout}>로그아웃</S.Button>
          </>
        ) : (
          <>
            <S.Title>로그인을 해주세요</S.Title>

            <S.Button onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </S.Button>
            <S.LoginLink href="https://github.com/login/oauth/authorize?client_id=a51717e6e0bb9e34da8e">
              로그인
            </S.LoginLink>
          </>
        )}
      </S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement
  );
}

export default MenuDrawer;
