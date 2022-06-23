import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useContext, useReducer } from "react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import logoImg from "asset/logo.svg";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import SearchBar from "components/common/SearchBar/SearchBar";

import * as S from "components/layout/Header/Header.style";

function Header() {
  const [isSearchOpen, setSearchOpen] = useReducer(
    (isOpen: boolean) => !isOpen,
    false
  );
  const [isMenuOpen, setMenuOpen] = useReducer(
    (isOpen: boolean) => !isOpen,
    false
  );

  const isLoggedIn = useContext(LoginContext);

  const campus = useContext(campusContext);

  const handleSearchOpen = () => {
    setSearchOpen();
  };

  const handleMenuToggle = () => {
    setMenuOpen();
  };

  return (
    <S.Container isSearchOpen={isSearchOpen}>
      {isSearchOpen ? (
        <>
          <SearchBar closeSearchBar={setSearchOpen} />
          <S.SearchToggleButton onClick={handleSearchOpen}>
            <MdCancel />
          </S.SearchToggleButton>
        </>
      ) : (
        <>
          <Link to={PATHNAME.HOME}>
            <S.PageName>
              <S.LogoImage src={logoImg} alt="mat-zip logo" />
              {campus && <S.Campus> in {campus}</S.Campus>}
            </S.PageName>
          </Link>
          <S.RightWrapper>
            <S.SearchToggleButton onClick={handleSearchOpen}>
              <BsSearch />
            </S.SearchToggleButton>
            <S.MenuButton onClick={handleMenuToggle}>
              <GiHamburgerMenu />
            </S.MenuButton>
            {isMenuOpen && (
              <MenuDrawer
                closeMenu={handleMenuToggle}
                isLoggedIn={isLoggedIn}
              />
            )}
          </S.RightWrapper>
        </>
      )}
    </S.Container>
  );
}

export default Header;
