import { setupWorker } from "msw";

import {
  userHandler,
  categoryHandler,
  restaurantHandler,
  reviewHandler,
} from "mock/handlers";

export const worker = setupWorker(
  ...userHandler,
  ...categoryHandler,
  ...restaurantHandler,
  ...reviewHandler
);
