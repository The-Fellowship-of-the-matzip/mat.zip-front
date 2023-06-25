import { setupWorker } from "msw";

import {
  bookmarkHandler,
  mypageHandler,
  userHandler,
  categoryHandler,
  restaurantHandler,
  reviewHandler,
  storeRequestHandler,
} from "mock/handlers";

export const worker = setupWorker(
  ...bookmarkHandler,
  ...mypageHandler,
  ...userHandler,
  ...categoryHandler,
  ...restaurantHandler,
  ...reviewHandler,
  ...storeRequestHandler
);
