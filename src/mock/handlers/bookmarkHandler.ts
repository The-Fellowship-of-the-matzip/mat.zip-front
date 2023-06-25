import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

const bookmark: number[] = [];

export const bookmarkHandler = [
  rest.post(
    `${API_BASE_URL}/restaurants/:restaurantId/bookmarks`,
    (req, res, ctx) => {
      const { restaurantId } = req.params;
      bookmark.push(Number(restaurantId));

      return res(ctx.status(201));
    }
  ),

  rest.delete(
    `${API_BASE_URL}/restaurants/:restaurantId/bookmarks`,
    (req, res, ctx) => {
      const { restaurantId } = req.params;
      const index = bookmark.findIndex((id) => id === Number(restaurantId));
      bookmark.splice(index, 1);

      return res(ctx.status(204));
    }
  ),
];
