import { rest } from "msw";

interface PostLoginReqBody {
  content: string;
  rating: number;
  menu: string;
}

export const reviewHandler = [
  rest.get("/api/restaurants/:restaurantId/reviews", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const size = req.url.searchParams.get("size");

    if (!page || !size) {
      return res(ctx.status(400), ctx.json({ message: "잘못된 요청입니다." }));
    }

    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 2,
          reviewAuthor: {
            username: "huni",
            profileImage: "huni.com",
          },
          content: "걍 그럼",
          rating: 4,
          menu: "무 닭볶음탕 (중)",
        },
        {
          id: 1,
          reviewAuthor: {
            username: "ori",
            profileImage: "ori.com",
          },
          content: "정말 맛있어요!!",
          rating: 5,
          menu: "무 닭볶음탕 (중)",
        },
      ])
    );
  }),
  rest.post<PostLoginReqBody>(
    "/api/restaurants/:restaurantId/reviews",
    (req, res, ctx) => {
      const { content, rating, menu } = req.body;

      if (!content || !rating || !menu) {
        return res(
          ctx.status(400),
          ctx.json({ message: "잘못된 요청입니다." })
        );
      }

      return res(ctx.status(201));
    }
  ),
];
