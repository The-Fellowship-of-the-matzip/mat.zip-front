import { rest } from "msw";

import { API_BASE_URL } from "constants/api";

import { userProfile } from "mock/userData";

export const mypageHandler = [
  rest.get(`${API_BASE_URL}/mypage/profile`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userProfile));
  }),
];
