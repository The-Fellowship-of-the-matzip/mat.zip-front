import { campusContext } from "context/CampusContextProvider";
import { useContext, useReducer } from "react";
import { BsSearch } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

import useLogin from "hooks/useLogin";

import SearchBar from "components/common/SearchBar/SearchBar";

import * as S from "components/layout/Header/Header.style";

function Header() {
  const [isSearchOpen, setSearchOpen] = useReducer(
    (isOpen: boolean) => !isOpen,
    false
  );
  const [isLogin] = useLogin();

  const campus = useContext(campusContext);

  const handleSearchOpen = () => {
    setSearchOpen();
  };

  return (
    <S.Container isSearchOpen={isSearchOpen}>
      {isSearchOpen ? (
        <>
          <SearchBar onClick={() => {}} />
          <S.SearchToggleButton onClick={handleSearchOpen}>
            <MdCancel />
          </S.SearchToggleButton>
        </>
      ) : (
        <>
          <S.PageName>
            MAT.ZIP{campus && <S.Campus> :{campus}</S.Campus>}
          </S.PageName>
          <S.RightWrapper>
            <S.SearchToggleButton onClick={handleSearchOpen}>
              <BsSearch />
            </S.SearchToggleButton>
            {isLogin ? <S.Profile /> : <S.LoginLink>로그인</S.LoginLink>}
          </S.RightWrapper>
        </>
      )}
    </S.Container>
  );
}

export default Header;
