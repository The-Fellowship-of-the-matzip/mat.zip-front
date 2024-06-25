import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import logoImg from "asset/logo-light.svg";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import CampusSelectModal from "components/layout/Header/CampusSelectModal/CampusSelectModal";
import SearchBar from "components/common/SearchBar/SearchBar";

import LogoutModal from "components/layout/Header/LogoutModal/LogoutModal";

import * as S from "components/layout/Header/Header.style";

function Header() {
  const isLoggedIn = useContext(LoginContext);
  const campus = useContext(campusContext);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const openSelectModal = () => setIsSelectModalOpen(true);

  const closeSelectModal = () => setIsSelectModalOpen(false);

  const openLogoutModal = () => setIsLogoutModalOpen(true);

  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const location = useLocation();

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
        <Link to={PATHNAME.HOME} onClick={handleIconClick}>
          <S.PageName>
            <S.LogoImage src={logoImg} alt="MAT.ZIP logo" />
            {campus && <S.Campus> in {campus}</S.Campus>}
          </S.PageName>
        </Link>
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
      <SearchBar />
    </S.Container>
  );
}

export default Header;
