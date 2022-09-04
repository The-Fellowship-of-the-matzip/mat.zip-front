import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { storeRequests } from "mock/data";

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
];
