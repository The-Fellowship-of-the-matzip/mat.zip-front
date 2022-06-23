import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import ROUTES from "constants/routes";

import { campusContext } from "context/CampusContextProvider";

import PageLayout from "components/layout/PageLayout/PageLayout";

function App() {
  const campus = useContext(campusContext);

  const { MAIN_ROUTES, SPECIAL_ROUTES } = ROUTES;

  return (
    <Routes>
      {campus !== "잠실" && campus !== "선릉" ? (
        <Route
          path={SPECIAL_ROUTES.CAMPUS_SELECT.path}
          element={SPECIAL_ROUTES.CAMPUS_SELECT.element}
        />
      ) : (
        <>
          <Route
            path={SPECIAL_ROUTES.LOGIN.path}
            element={SPECIAL_ROUTES.LOGIN.element}
          />
          <Route element={<PageLayout />}>
            {Object.values(MAIN_ROUTES).map(({ path, element }) => (
              <Route path={path} element={element} />
            ))}
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
