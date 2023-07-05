import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { bookmarkedStores } from "mock/userData";

const bookmark: number[] = [];

export const bookmarkHandler = [
  rest.get(`${API_BASE_URL}/restaurants/bookmarks`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bookmarkedStores));
  }),

  rest.post(
    `${API_BASE_URL}/bookmarks/restaurants/:restaurantId`,
    (req, res, ctx) => {
      const { restaurantId } = req.params;
      bookmark.push(Number(restaurantId));

      return res(ctx.status(201));
    }
  ),

  rest.delete(
    `${API_BASE_URL}/bookmarks/restaurants/:restaurantId`,
    (req, res, ctx) => {
      const { restaurantId } = req.params;
      const index = bookmark.findIndex((id) => id === Number(restaurantId));
      bookmark.splice(index, 1);

      return res(ctx.status(204));
    }
  ),
];
