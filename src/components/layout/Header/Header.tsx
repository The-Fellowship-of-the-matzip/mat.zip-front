import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import logoImg from "asset/logo-light-image.svg";
import logoText from "asset/logo-light-text.svg";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import SearchBar from "components/common/SearchBar/SearchBar";

import CampusSelectModal from "components/layout/Header/CampusSelectModal/CampusSelectModal";
import * as S from "components/layout/Header/Header.style";
import LogoutModal from "components/layout/Header/LogoutModal/LogoutModal";

function Header() {
  const isLoggedIn = useContext(LoginContext);
  const campus = useContext(campusContext);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openSelectModal = () => setIsSelectModalOpen(true);

  const closeSelectModal = () => setIsSelectModalOpen(false);

  const openLogoutModal = () => setIsLogoutModalOpen(true);

  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const location = useLocation();
  const isMainPage = location.pathname === PATHNAME.HOME;
  const isCategoryDetailPage = location.pathname.startsWith(
    PATHNAME.CATEGORY_DETAIL
  );

  const handleIconClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    closeMenu();
  }, [location.key]);

  return (
    <S.Container>
      <S.TopWrapper>
        <S.LeftWrapper>
          {!isMainPage && (
            <S.BackButton onClick={goBack}>
              <MdArrowBackIos />
            </S.BackButton>
          )}
          <Link to={PATHNAME.HOME} onClick={handleIconClick}>
            <S.PageName>
              <S.LogoWrapper>
                {isMainPage && (
                  <S.LogoImage src={logoImg} alt="MAT.ZIP 로고 이미지" />
                )}
                <S.LogoText src={logoText} alt="MAT.ZIP 로고 텍스트" />
              </S.LogoWrapper>
              {campus && <S.Campus> in {campus}</S.Campus>}
            </S.PageName>
          </Link>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.MenuButton onClick={openMenu}>
            <GiHamburgerMenu />
          </S.MenuButton>
          {isMenuOpen && (
            <MenuDrawer
              isLoggedIn={isLoggedIn}
              onOpenCampusSelectModal={openSelectModal}
              onOpenLogoutModal={openLogoutModal}
              onCloseMenu={closeMenu}
            />
          )}
          {isSelectModalOpen && (
            <CampusSelectModal onCloseModal={closeSelectModal} />
          )}
          {isLogoutModalOpen && <LogoutModal onCloseModal={closeLogoutModal} />}
        </S.RightWrapper>
      </S.TopWrapper>
      {(isMainPage || isCategoryDetailPage) && <SearchBar />}
    </S.Container>
  );
}

export default Header;
