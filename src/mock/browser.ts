import { setupWorker } from "msw";

import {
  imageHandler,
  bookmarkHandler,
  mypageHandler,
  userHandler,
  categoryHandler,
  restaurantHandler,
  reviewHandler,
  storeRequestHandler,
  bookmarkHandler,
} from "mock/handlers";

export const worker = setupWorker(
  ...imageHandler,
  ...bookmarkHandler,
  ...mypageHandler,
  ...userHandler,
  ...categoryHandler,
  ...restaurantHandler,
  ...reviewHandler,
  ...storeRequestHandler,
  ...bookmarkHandler
);
