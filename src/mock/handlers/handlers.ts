import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {}),
  rest.get("/user", (req, res, ctx) => {}),
];
