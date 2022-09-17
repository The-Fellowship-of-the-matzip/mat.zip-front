/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

import { AUTH_LINK } from "constants/api";
import { getOtherCampus } from "constants/campus";
import type { Campus } from "constants/campus";
import MESSAGES from "constants/messages";
import { PATHNAME } from "constants/routes";

import { campusContext, setCampusContext } from "context/CampusContextProvider";

import useLogin from "hooks/useLogin";

import * as S from "components/layout/MenuDrawer/MenuDrawer.style";

type Props = { closeMenu: () => void; isLoggedIn: boolean };

function MenuDrawer({ closeMenu, isLoggedIn }: Props) {
  const campus = useContext(campusContext);
  const otherCampus = getOtherCampus(campus as Campus);
  const setCampus = useContext(setCampusContext);

  const location = useLocation();

  const { logout } = useLogin();

  const handleCampusChangeRequest = () => {
    if (
      !window.confirm(
        MESSAGES.CAMPUS_CHANGE_CONFIRM(campus as Campus, otherCampus)
      )
    ) {
      return;
    }
    setCampus(otherCampus);
    closeMenu();
  };

  const handleLogout = () => {
    if (!window.confirm(MESSAGES.LOGOUT_CONFIRM)) {
      return;
    }

    logout();
    closeMenu();
    window.alert(MESSAGES.LOGOUT_COMPLETE);
  };

  useEffect(() => {
    closeMenu();
  }, [location.key]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
            <S.LoginLink href={AUTH_LINK}>로그인</S.LoginLink>
          </>
        )}
        <S.CustomLink to={PATHNAME.STORE_DEMAND}>
          식당 추가 요청하기
        </S.CustomLink>
      </S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement
  );
}

export default MenuDrawer;
