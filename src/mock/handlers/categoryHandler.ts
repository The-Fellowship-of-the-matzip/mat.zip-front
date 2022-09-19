import { rest } from "msw";

import { API_BASE_URL } from "constants/api";
import { categories } from "constants/categories";

export const categoryHandler = [
  rest.get(`${API_BASE_URL}/categories`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
];
