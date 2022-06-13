import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const MainContainer = styled.main`
  width: 375px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.white};
`;

function PageLayout() {
  return (
    <div id="app">
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}

export default PageLayout;
