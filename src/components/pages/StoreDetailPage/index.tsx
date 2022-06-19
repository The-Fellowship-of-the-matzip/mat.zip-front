import axios from "axios";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";

import ReviewInputBottomSheet from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";
import * as S from "components/pages/StoreDetailPage/index.style";

import { Store } from "mock/data";

type ReviewShape = {
  id: number;
  author: {
    username: string;
    profileImage: string;
  };
  content: string;
  rating: number;
  menu: string;
};

type ReviewResponseShape = {
  hasNext: boolean;
  reviews: ReviewShape[];
};

function StoreDetailPage({ restaurantId = 0 }) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const fetchStoreDetailInfo = async () => {
    const { data } = await axios.get<Store & { address: string }>(`
    /api/restaurants/${restaurantId}
    `);
    return data;
  };

  const fetchStoreDetailList = async ({ pageParam = 0 }) => {
    const { data } =
      await axios.get<ReviewResponseShape>(`/api/restaurants/${restaurantId}/reviews?page=${pageParam}&size=${5}
    `);
    return { ...data, nextPageParam: pageParam + 1 };
  };

  const { data: storeData } = useQuery("storeDetailInfo", fetchStoreDetailInfo);

  const {
    data: reviewData,
    error: reviewError,
    isLoading: IsReviewLoading,
    isError: isReviewError,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery("reviewDetailStore", fetchStoreDetailList, {
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext) {
        return lastPage.nextPageParam;
      }
      return;
    },
  });

  const loadMoreReviews = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const onSubmitReview = () => {};

  return storeData ? (
    <S.StoreDetailPageContainer>
      <S.StoreThumbnailWrapper>
        <img alt="가게 이미지" src={storeData?.imageUrl} />
      </S.StoreThumbnailWrapper>
      <S.StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={storeData} />
        <S.ReviewListWrapper>
          <h2>리뷰</h2>
          <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
            {IsReviewLoading && <div>로딩중...</div>}
            {isReviewError && (
              <div>{reviewError instanceof Error && reviewError.message}</div>
            )}
            {isFetching && <div>다음 페이지</div>}
            {reviewData?.pages
              .reduce<ReviewShape[]>(
                (prevReviews, { reviews: currentReviews }) => [
                  ...prevReviews,
                  ...currentReviews,
                ],
                []
              )
              .map((reviewData) => {
                const {
                  id,
                  author: { profileImage },
                  rating,
                  content,
                  menu,
                } = reviewData;
                return (
                  <StoreReviewItem
                    key={id}
                    reviewInfo={{ id, profileImage, rating, content, menu }}
                  />
                );
              })}
          </InfiniteScroll>
        </S.ReviewListWrapper>
      </S.StoreReviewContentWrapper>
      <S.ReviewPlusButton onClick={() => setIsReviewOpen(true)}>
        +
      </S.ReviewPlusButton>
      {isReviewOpen && (
        <ReviewInputBottomSheet
          closeSheet={() => setIsReviewOpen(false)}
          onSubmit={onSubmitReview}
        />
      )}
    </S.StoreDetailPageContainer>
  ) : null;
}

export default StoreDetailPage;
