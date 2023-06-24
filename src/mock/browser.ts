import { setupWorker } from "msw";

import {
  imageHandler,
  userHandler,
  categoryHandler,
  restaurantHandler,
  reviewHandler,
  storeRequestHandler,
} from "mock/handlers";

export const worker = setupWorker(
  ...imageHandler,
  ...userHandler,
  ...categoryHandler,
  ...restaurantHandler,
  ...reviewHandler,
  ...storeRequestHandler
);
