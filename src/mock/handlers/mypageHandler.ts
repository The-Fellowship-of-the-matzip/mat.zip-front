import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { userProfile, userReviews } from "mock/userData";

export const mypageHandler = [
  rest.get(`${API_BASE_URL}/mypage/profile`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userProfile));
  }),

  rest.get(`${API_BASE_URL}/mypage/reviews`, (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const size = req.url.searchParams.get("size");

    if (!page || !size) {
      return res(ctx.status(400), ctx.json({ message: "잘못된 요청입니다." }));
    }

    const sizeNo = Number(size);
    const pageNo = Number(page);
    const startIndex = pageNo * sizeNo;
    const endIndex = startIndex + sizeNo;

    return res(
      ctx.status(200),
      ctx.json({
        hasNext: endIndex < userReviews.length,
        reviews: userReviews.slice(startIndex, endIndex),
      })
    );
  }),
];
