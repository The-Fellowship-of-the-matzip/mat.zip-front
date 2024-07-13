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

import * as S from "components/layout/Header/Header.style";

function Header() {
  const isLoggedIn = useContext(LoginContext);
  const campus = useContext(campusContext);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            <MenuDrawer closeMenu={closeMenu} isLoggedIn={isLoggedIn} />
          )}
        </S.RightWrapper>
      </S.TopWrapper>
      {(isMainPage || isCategoryDetailPage) && <SearchBar />}
    </S.Container>
  );
}

export default Header;
