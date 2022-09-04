import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { storeRequests } from "mock/data";

export const storeRequestHandler = [
  rest.get(
    `${API_BASE_URL}/campuses/:campusId/restaurants/requests`,
    (req, res, ctx) => {
      const response = { hasNext: false, items: storeRequests };
      return res(ctx.status(200), ctx.json(response));
    }
  ),
];
