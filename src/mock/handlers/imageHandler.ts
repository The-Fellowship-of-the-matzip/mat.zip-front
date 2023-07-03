import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

export const imageHandler = [
  rest.post(`${API_BASE_URL}/images`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        imageUrl:
          "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      })
    );
  }),
];
