import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { bookmarkedStores } from "mock/userData";

export const bookmarkHandler = [
  rest.get(`${API_BASE_URL}/restaurants/bookmarks`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bookmarkedStores));
  }),
];
