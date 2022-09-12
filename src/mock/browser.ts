import { setupWorker } from "msw";

import {
  userHandler,
  categoryHandler,
  restaurantHandler,
  reviewHandler,
  storeRequestHandler,
} from "mock/handlers";

export const worker = setupWorker(
  ...userHandler,
  ...categoryHandler,
  ...restaurantHandler,
  ...reviewHandler,
  ...storeRequestHandler
);
