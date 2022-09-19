import {
  CampusSelectPage,
  CategoryDetailPage,
  CategoryPage,
  Login,
  SearchResultPage,
  StoreDetailPage,
  StoreDemandPage,
} from "components/pages";

export const PATHNAME = {
  HOME: "/",
  LOGIN: "/login",
  CATEGORY_DETAIL: "/category",
  STORE_DETAIL: "/store-detail",
  SEARCH: "/search",
  STORE_DEMAND: "store-demand",
  WILD_CARD: "*",
};

const MAIN_ROUTES = {
  HOME: { path: PATHNAME.HOME, element: <CategoryPage /> },
  CATEGORY_DETAIL: {
    path: `${PATHNAME.CATEGORY_DETAIL}/:categoryId`,
    element: <CategoryDetailPage />,
  },
  STORE_DETAIL: {
    path: `${PATHNAME.STORE_DETAIL}/:storeId`,
    element: <StoreDetailPage />,
  },
  SEARCH: { path: PATHNAME.SEARCH, element: <SearchResultPage /> },
  STORE_REQUEST: {
    path: PATHNAME.STORE_DEMAND,
    element: <StoreDemandPage />,
  },
};

const SPECIAL_ROUTES = {
  LOGIN: { path: PATHNAME.LOGIN, element: <Login /> },
  CAMPUS_SELECT: { path: PATHNAME.WILD_CARD, element: <CampusSelectPage /> },
};

const ROUTES = { MAIN_ROUTES, SPECIAL_ROUTES };

export default ROUTES;
