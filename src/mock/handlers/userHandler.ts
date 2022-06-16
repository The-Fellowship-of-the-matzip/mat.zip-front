import { rest } from "msw";

export const userHandler = [
  rest.get("/api/login", (req, res, ctx) => {
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
