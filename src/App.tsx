import PageLayout from "./components/layout/PageLayout/PageLayout";
import CategoryDetailPage from "./components/pages/CategoryDetailPage";
import CategoryPage from "./components/pages/CategoryPage";
import StoreDetailPage from "./components/pages/StoreDetailPage";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { campusContext } from "context/CampusContextProvider";

import CampusSelectPage from "components/pages/CampusSelectPage/CampusSelectPage";
import Login from "components/pages/Login/Login";

function App() {
  const campus = useContext(campusContext);

  return (
    <Routes>
      {campus === null ? (
        <Route path="*" element={<CampusSelectPage />} />
      ) : (
        <>
          <Route path="login" element={<Login />} />
          <Route element={<PageLayout />}>
            <Route path="/" element={<CategoryPage />} />
            <Route
              path="/category/:categoryId"
              element={<CategoryDetailPage />}
            />
            <Route
              path="/store-detail/:storeId"
              element={<StoreDetailPage />}
            />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
