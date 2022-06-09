import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em 2em;

  background-color: ${({ theme }) => theme.primary};
`;

const PageName = styled.h1`
  font-size: 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const Profile = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

function Header() {
  return (
    <Container>
      <PageName>mat.zip</PageName>
      <RightWrapper>
        <SearchBar onClick={() => {}} />
        <Profile />
      </RightWrapper>
    </Container>
  );
}

export default Header;
