import {
  CampusSelectPage,
  CategoryDetailPage,
  CategoryPage,
  Login,
  SearchResultPage,
  StoreDetailPage,
  StoreDemandPage,
  MyPage,
  BookmarkListPage,
  MyReviewListPage,
} from "components/pages";

export const PATHNAME = {
  HOME: "/",
  LOGIN: "/login",
  CATEGORY_DETAIL: "/category",
  STORE_DETAIL: "/store-detail",
  SEARCH: "/search",
  STORE_DEMAND: "store-demand",
  MY_PAGE: "/my-page",
  BOOKMARK_LIST_PAGE: "/my-page/bookmark",
  MY_REVIEWS: "/my-page/reviews",
  WILD_CARD: "*",
} as const;

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
  MY_PAGE: {
    path: PATHNAME.MY_PAGE,
    element: <MyPage />,
  },
  BOOKMARK_LIST_PAGE: {
    path: PATHNAME.BOOKMARK_LIST_PAGE,
    element: <BookmarkListPage />,
  },
  MY_REVIEWS: {
    path: PATHNAME.MY_REVIEWS,
    element: <MyReviewListPage />,
  },
} as const;

const SPECIAL_ROUTES = {
  LOGIN: { path: PATHNAME.LOGIN, element: <Login /> },
  CAMPUS_SELECT: { path: PATHNAME.WILD_CARD, element: <CampusSelectPage /> },
} as const;

const ROUTES = { MAIN_ROUTES, SPECIAL_ROUTES } as const;

export default ROUTES;
