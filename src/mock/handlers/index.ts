import { imageHandler } from "./imageHandler";

import { categoryHandler } from "mock/handlers/categoryHandler";
import { restaurantHandler } from "mock/handlers/restaurantHandler";
import { reviewHandler } from "mock/handlers/reviewHandler";
import { storeDemandHandler } from "mock/handlers/storeDemandHandler";
import { userHandler } from "mock/handlers/userHandler";

export {
  userHandler,
  categoryHandler,
  restaurantHandler,
  reviewHandler,
  storeDemandHandler as storeRequestHandler,
  imageHandler,
};
