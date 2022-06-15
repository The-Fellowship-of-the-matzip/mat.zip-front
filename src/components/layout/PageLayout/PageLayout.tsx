import { Outlet } from "react-router-dom";

import Header from "components/layout/Header/Header";
import * as S from "components/layout/PageLayout/PageLayout.style";

function PageLayout() {
  return (
    <div id="app">
      <Header />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </div>
  );
}

export default PageLayout;
