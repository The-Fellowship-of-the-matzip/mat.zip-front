import AutoComplete from "../AutoComplete/AutoComplete";
import Button from "../Button/Button";
import Input from "../Input/Input";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ROUTES, { PATHNAME } from "constants/routes";

import { SearchIcon } from "asset";

import useAutoComplete from "hooks/useAutoComplete";
import useBackdropClick from "hooks/useBackdropClick";
import useFocusTrap from "hooks/useFocusTrap";

import * as S from "components/common/SearchBar/SearchBar.style";

interface SearchBarProps {
  closeSearchBar?: () => void;
}

function SearchBar({ closeSearchBar }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => setIsDropdownOpen(false);

  const { autoCompleteList, handleAutoCompleteList } = useAutoComplete();

  const searchBarRef = useFocusTrap(isDropdownOpen);
  useBackdropClick(searchBarRef, closeDropdown);

  const location = useLocation();
  const navigate = useNavigate();

  const handleKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleSearchInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value);
    handleAutoCompleteList(value);
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
    <S.Container ref={searchBarRef}>
      <S.FormContainer onSubmit={handleSearchButtonClick}>
        <S.InputContainer onClick={() => setIsDropdownOpen(true)}>
          <Input
            css={S.inputStyle(isDropdownOpen)}
            placeholder="맛집을 검색해 보세요"
            value={keyword}
            min={1}
            max={30}
            onChange={handleSearchInput}
          />
        </S.InputContainer>
        <Button css={S.buttonStyle(isDropdownOpen)}>
          <SearchIcon />
        </Button>
      </S.FormContainer>
      {isDropdownOpen && (
        <AutoComplete
          optionList={autoCompleteList}
          onOptionFocus={handleKeyword}
          closeAutoComplete={closeDropdown}
        />
      )}
    </S.Container>
  );
}

export default SearchBar;
