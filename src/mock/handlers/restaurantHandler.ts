import { rest } from "msw";

import { stores } from "mock/data";

export const restaurantHandler = [
  rest.get("/api/campuses/:campusId/restaurants", (req, res, ctx) => {
    // const { campusId } = req.params; // 안 씀
    const categoryId = req.url.searchParams.get("categoryId");
    const page = req.url.searchParams.get("page");
    const size = req.url.searchParams.get("size");

    if (!page || !size) {
      // 이거 메세지는 맘대로 넣음
      return res(ctx.status(400), ctx.json({ message: "잘못된 요청입니다." }));
    }

    const sizeNo = Number(size); // 1, ...
    const pageNo = Number(page); // 0, ...
    const startIndex = pageNo * sizeNo;
    const endIndex = startIndex + sizeNo;
    if (!categoryId) {
      // 전체 카테고리 조회 - mocking은 campusId 상관없이 항상 같은 데이터 return, size만 반영
      return res(ctx.status(200), ctx.json(stores.slice(startIndex, endIndex)));
    }

    // 카테고리별 조회 - mocking은 campusId, categoryId 상관없이 항상 같은 데이터 return, size만 반영
    return res(ctx.status(200), ctx.json(stores.slice(startIndex, endIndex)));
  }),
];
