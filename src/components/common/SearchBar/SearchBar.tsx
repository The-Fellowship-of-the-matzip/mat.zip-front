import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

import ROUTES, { PATHNAME } from "constants/routes";

import * as S from "components/common/SearchBar/SearchBar.style";

interface SearchBarProp {
  closeSearchBar?: () => void;
}

function SearchBar({ closeSearchBar }: SearchBarProp) {
  const [keyword, setKeyword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value);
  };

  const handleSearchButtonClick: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();

    if (!keyword) return;
    navigate(`${PATHNAME.SEARCH}?name=${keyword}`);
    if (closeSearchBar !== undefined) {
      closeSearchBar();
    }
  };

  useEffect(() => {
    if (location.pathname !== ROUTES.MAIN_ROUTES.SEARCH.path) {
      setKeyword("");
    }
  }, [location]);

  return (
    <S.Container onSubmit={handleSearchButtonClick}>
      <S.SearchInput
        type="text"
        placeholder="검색"
        value={keyword}
        onChange={handleSearchInput}
        min={1}
        max={30}
      />
      <S.Button type="submit">
        <BsSearch />
      </S.Button>
    </S.Container>
  );
}

export default SearchBar;
