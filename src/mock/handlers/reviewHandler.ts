import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { reviews as reviewsData } from "mock/data";

interface PostReviewReqBody {
  content: string;
  rating: number;
  menu: string;
}
interface PutReviewReqBody extends PostReviewReqBody {}

let reviews = reviewsData;

export const reviewHandler = [
  rest.get(
    `${API_BASE_URL}/restaurants/:restaurantId/reviews`,
    (req, res, ctx) => {
      // const {restaurantId} = req.params // 안 씀
      const page = req.url.searchParams.get("page");
      const size = req.url.searchParams.get("size");

      console.log(page, size);
      if (!page || !size) {
        // 이거 메세지는 맘대로 넣음
        return res(
          ctx.status(400),
          ctx.json({ message: "잘못된 요청입니다." })
        );
      }

      const sizeNo = Number(size); // 1, ...
      const pageNo = Number(page); // 0, ...
      const startIndex = pageNo * sizeNo;
      const endIndex = startIndex + sizeNo;
      // 식당 리뷰 조회 - mocking은 restaurantId 상관없이 항상 같은 데이터 return
      return res(
        ctx.status(200),
        ctx.json({
          hasNext: endIndex < reviews.length,
          reviews: reviews.slice(startIndex, endIndex),
        })
      );
    }
  ),
  rest.post<PostReviewReqBody>(
    `${API_BASE_URL}/restaurants/:restaurantId/reviews`,
    (req, res, ctx) => {
      const { restaurantId } = req.params;
      const { content, rating, menu } = req.body;

      if (!restaurantId || !content || !rating || !menu) {
        return res(
          ctx.status(400),
          ctx.json({ message: "잘못된 요청입니다." })
        );
      }

      const token = req.headers.get("Authorization");

      if (!token?.split("Bearer ").length) {
        return res(
          ctx.status(400),
          ctx.json({ message: "유효하지 않은 토큰입니다." })
        );
      }

      reviews.push({
        id: Math.floor(Math.random() * 10000 + 1),
        author: {
          username: "김맛집",
          profileImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        content,
        rating,
        menu,
        updatable: true,
      });
      return res(ctx.status(201));
    }
  ),
  rest.put<PutReviewReqBody>(
    "/api/restaurants/:restaurantId/reviews/:reviewId",
    (req, res, ctx) => {
      const { restaurantId, reviewId } = req.params;
      const { content, rating, menu } = req.body;

      if (!restaurantId || !reviewId || !content || !rating || !menu)
        return res(ctx.status(400), ctx.json({ message: "잘못된 요청" }));

      const isExist = reviews.some((review) => review.id === Number(reviewId));
      if (!isExist)
        return res(
          ctx.status(404),
          ctx.json({ message: "해당하는 리뷰가 없음" })
        );

      reviews = reviews.map((review) => {
        if (review.id === Number(reviewId))
          return {
            ...review,
            content,
            rating,
            menu,
          };
        return review;
      });
    }
  ),
  rest.delete(
    "/api/restaurants/:restaurantId/reviews/:reviewId",
    (req, res, ctx) => {
      const { restaurantId, reviewId } = req.params;

      if (!restaurantId || !reviewId)
        return res(ctx.status(400), ctx.json({ message: "잘못된 요청" }));

      const isExist = reviews.some((review) => review.id === Number(reviewId));
      if (!isExist)
        return res(
          ctx.status(404),
          ctx.json({ message: "해당하는 리뷰가 없음" })
        );

      reviews = reviews.filter((review) => review.id !== Number(reviewId));
      return res(ctx.status(204));
    }
  ),
];
