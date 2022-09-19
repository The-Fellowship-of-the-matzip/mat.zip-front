import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useContext, useReducer } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import logoImg from "asset/logo.svg";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import SearchBar from "components/common/SearchBar/SearchBar";

import * as S from "components/layout/Header/Header.style";

function Header() {
  const isLoggedIn = useContext(LoginContext);
  const campus = useContext(campusContext);

  const [isMenuOpen, setMenuOpen] = useReducer(
    (isOpen: boolean) => !isOpen,
    false
  );

  const handleMenuToggle = () => {
    setMenuOpen();
  };

  return (
    <S.Container>
      <S.TopWrapper>
        <Link to={PATHNAME.HOME}>
          <S.PageName>
            <S.LogoImage src={logoImg} alt="MAT.ZIP logo" />
            {campus && <S.Campus> in {campus}</S.Campus>}
          </S.PageName>
        </Link>
        <S.RightWrapper>
          <S.MenuButton onClick={handleMenuToggle}>
            <GiHamburgerMenu />
          </S.MenuButton>
          {isMenuOpen && (
            <MenuDrawer closeMenu={handleMenuToggle} isLoggedIn={isLoggedIn} />
          )}
        </S.RightWrapper>
      </S.TopWrapper>
      <SearchBar />
    </S.Container>
  );
}

export default Header;
