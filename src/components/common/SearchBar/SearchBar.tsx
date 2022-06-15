import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import * as S from "components/common/SearchBar/SearchBar.style";

type SearchBarProps = {
  onClick: React.MouseEventHandler;
};

function SearchBar({ onClick }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  const handleSearchInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value);
  };

  return (
    <S.Container>
      <S.SearchInput
        type="text"
        placeholder="검색"
        value={keyword}
        onChange={handleSearchInput}
      />
      <S.Button onClick={onClick}>
        <BsSearch />
      </S.Button>
    </S.Container>
  );
}

export default SearchBar;
