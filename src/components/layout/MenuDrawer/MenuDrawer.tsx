/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ReactDOM from "react-dom";

import { AUTH_LINK } from "constants/api";
import { PATHNAME } from "constants/routes";

import Button from "components/common/Button/Button";
import Text from "components/common/Text/Text";

import * as S from "components/layout/MenuDrawer/MenuDrawer.style";

interface MenuDrawerProps {
  onCloseMenu: () => void;
  onOpenCampusSelectModal: () => void;
  onOpenLogoutModal: () => void;
  isLoggedIn: boolean;
}

function MenuDrawer({
  isLoggedIn,
  onCloseMenu,
  onOpenCampusSelectModal,
  onOpenLogoutModal,
}: MenuDrawerProps) {
  const handleCampusChangeRequest = () => {
    onCloseMenu();
    onOpenCampusSelectModal();
  };

  const handleLogout = () => {
    onCloseMenu();
    onOpenLogoutModal();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <S.Container>
      <S.Backdrop onClick={onCloseMenu} />
      <S.Content>
        {isLoggedIn ? (
          <>
            <Text css={S.titleStyle} size="lg">
              어서오세요
            </Text>
            <Button variant="textButton" onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </Button>
            <Button variant="textButton" onClick={handleLogout}>
              로그아웃
            </Button>
            <S.CustomLink to={PATHNAME.MY_PAGE}>마이페이지</S.CustomLink>
          </>
        ) : (
          <>
            <Text css={S.titleStyle} size="lg">
              로그인을 해주세요
            </Text>
            <Button variant="textButton" onClick={handleCampusChangeRequest}>
              캠퍼스 변경하기
            </Button>
            <S.LoginLink href={AUTH_LINK}>로그인</S.LoginLink>
          </>
        )}
        <S.CustomLink to={PATHNAME.STORE_DEMAND}>
          식당 추가 요청하기
        </S.CustomLink>
      </S.Content>
    </S.Container>,
    document.querySelector("#app") as HTMLElement,
  );
}

export default MenuDrawer;
