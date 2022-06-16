import { rest } from "msw";

import { categories } from "mock/data";

export const categoryHandler = [
  rest.get("/api/categories", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
];
