declare type CategoryId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

declare type StoreRequest = {
  id: string;
  categoryId: CategoryId;
  name: string;
  author: string;
  isRegistered: boolean;
  isAuthor: boolean;
};
