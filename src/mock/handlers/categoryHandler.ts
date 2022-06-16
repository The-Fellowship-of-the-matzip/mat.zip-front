import { rest } from "msw";

export const categoryHandler = [
  rest.get("/api/categories", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "한식",
        },
        {
          name: "중식",
        },
        {
          name: "일식",
        },
        {
          name: "양식",
        },
        {
          name: "카페/디저트",
        },
      ])
    );
  }),
];
