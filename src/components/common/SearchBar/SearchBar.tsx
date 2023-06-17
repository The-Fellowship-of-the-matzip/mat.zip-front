import Button from "../Button/Button";
import Input from "../Input/Input";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ROUTES, { PATHNAME } from "constants/routes";

import { SearchIcon } from "asset";

import * as S from "components/common/SearchBar/SearchBar.style";

interface SearchBarProps {
  closeSearchBar?: () => void;
}

function SearchBar({ closeSearchBar }: SearchBarProps) {
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
      <S.InputContainer>
        <Input
          css={S.inputStyle}
          placeholder="맛집을 검색해 보세요"
          value={keyword}
          min={1}
          max={30}
          onChange={handleSearchInput}
        />
      </S.InputContainer>
      <Button css={S.buttonStyle}>
        <SearchIcon />
      </Button>
    </S.Container>
  );
}

export default SearchBar;
