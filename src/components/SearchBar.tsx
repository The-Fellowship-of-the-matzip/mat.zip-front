import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 0.5em 1em;

  background-color: ${({ theme }) => theme.white};

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const Button = styled.button`
  padding: 0 0.5em;

  background-color: ${({ theme }) => theme.white};

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const handleSearchInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value);
  };

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="검색"
        value={keyword}
        onChange={handleSearchInput}
      />
      <Button>🔍</Button>
    </Container>
  );
}

export default SearchBar;
