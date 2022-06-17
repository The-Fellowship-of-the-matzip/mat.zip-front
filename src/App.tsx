import PageLayout from "./components/layout/PageLayout/PageLayout";
import CategoryDetailPage from "./components/pages/CategoryDetailPage";
import CategoryPage from "./components/pages/CategoryPage";
import StoreDetailPage from "./components/pages/StoreDetailPage";
import { campusContext } from "context/CampusContextProvider";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import CampusSelectPage from "components/pages/CampusSelectPage/CampusSelectPage";

function App() {
  const campus = useContext(campusContext);

  return (
    <Routes>
      {campus === null ? (
        <Route path="*" element={<CampusSelectPage />} />
      ) : (
        <Route element={<PageLayout />}>
          <Route path="/" element={<CategoryPage />} />
          <Route
            path="/category"
            element={<CategoryDetailPage categoryName="임시" />}
          />
          <Route path="/store-detail" element={<StoreDetailPage />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
