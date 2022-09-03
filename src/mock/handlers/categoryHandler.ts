import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { categories } from "mock/data";

export const categoryHandler = [
  rest.get(`${API_BASE_URL}/api/categories`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
];
