export type ReviewShape = {
  id: string;
  author: {
    username: string;
    profileImage: string;
  };
  content: string;
  rating: number;
  menu: string;
  updatable: boolean;
};

export interface FetchParamProps {
  pageParam?: number;
  queryKey: any;
}
