import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

export const userHandler = [
  rest.get(`${API_BASE_URL}/login`, (req, res, ctx) => {
    const code = req.url.searchParams.get("code");
    if (!code) {
      return res(
        ctx.status(400),
        ctx.json({ message: "Github에 접근할 수 없습니다." })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: "access_token_1",
      })
    );
  }),
];
