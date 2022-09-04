import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { storeRequests } from "mock/data";

const checkToken = (token: string | null) =>
  token?.split("Bearer ").length !== 0;

export const storeRequestHandler = [
  rest.get(
    `${API_BASE_URL}/campuses/:campusId/restaurants/requests`,
    (req, res, ctx) => {
      const page = req.url.searchParams.get("page") || 0;
      const size = req.url.searchParams.get("size");

      const sizeNo = Number(size); // 1, ...
      const pageNo = Number(page); // 0, ...
      const startIndex = pageNo * sizeNo;
      const endIndex = startIndex + sizeNo;

      const response = {
        hasNext: endIndex < storeRequests.length,
        items: storeRequests.slice(startIndex, endIndex),
      };
      return res(ctx.status(200), ctx.json(response));
    }
  ),

  rest.post(
    `${API_BASE_URL}/campuses/:campusId/restaurants/requests`,
    (req, res, ctx) => {
      const token = req.headers.get("Authorization");
      if (!checkToken(token)) {
        return res(
          ctx.status(400),
          ctx.json({ message: "유효하지 않은 토큰입니다." })
        );
      }
      return res(ctx.status(201));
    }
  ),

  rest.put(
    `${API_BASE_URL}/campuses/:campusId/restaurants/requests/:requestId`,
    (req, res, ctx) => {
      const token = req.headers.get("Authorization");
      if (!checkToken(token)) {
        return res(
          ctx.status(400),
          ctx.json({ message: "유효하지 않은 토큰입니다." })
        );
      }
      return res(ctx.status(204));
    }
  ),

  rest.delete(
    `${API_BASE_URL}/campuses/:campusId/restaurants/requests/:requestId`,
    (req, res, ctx) => {
      const token = req.headers.get("Authorization");
      if (!checkToken(token)) {
        return res(
          ctx.status(400),
          ctx.json({ message: "유효하지 않은 토큰입니다." })
        );
      }
      return res(ctx.status(204));
    }
  ),
];
