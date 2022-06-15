import { Route, Routes } from "react-router-dom";
import CategoryDetailPage from "./components/pages/CategoryDetailPage";
import CategoryPage from "./components/pages/CategoryPage";
import PageLayout from "./components/layout/PageLayout";
import StoreDetailPage from "./components/pages/StoreDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<CategoryPage />} />
        <Route
          path="/category"
          element={<CategoryDetailPage categoryName="임시" />}
        />
        <Route path="/store-detail" element={<StoreDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
