import { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import MESSAGES from "constants/messages";

import type { ReviewShape } from "api/fetchReviewList";
import fetchReviewList from "api/fetchReviewList";
import fetchStoreDetail from "api/fetchStoreDetail";
import getNextPageParam from "api/getNextPageParam";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import Spinner from "components/common/Spinner/Spinner";

import ReviewInputBottomSheet from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet";
import * as S from "components/pages/StoreDetailPage/StoreDetailPage.style";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";

function StoreDetailPage() {
  const { storeId: restaurantId } = useParams();
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const accessToken = window.sessionStorage.getItem("accessToken");

  const { data: storeData } = useQuery("storeDetailInfo", () =>
    fetchStoreDetail(restaurantId as string)
  );

  const {
    data: reviewData,
    error: reviewError,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["reviewDetailStore", { restaurantId, size: 5 }],
    fetchReviewList,
    { getNextPageParam }
  );

  const loadMoreReviews = () => {
    fetchNextPage();
  };

  const onReviewOpenClick = () => {
    if (accessToken) {
      setIsReviewOpen(true);
      return;
    }
    alert(MESSAGES.LOGIN_REQUIRED);
  };

  return restaurantId && storeData ? (
    <S.StoreDetailPageContainer>
      <S.StorePreviewImage alt="가게 이미지" src={storeData?.imageUrl} />
      <S.StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={storeData} />
        <S.ReviewListWrapper>
          <h2>리뷰</h2>
          <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
            {(isLoading || isFetching) && <Spinner />}
            {isError && (
              <div>{reviewError instanceof Error && reviewError.message}</div>
            )}
            {reviewData?.pages
              .reduce<ReviewShape[]>(
                (prevReviews, { reviews: currentReviews }) => [
                  ...prevReviews,
                  ...currentReviews,
                ],
                []
              )
              .map((reviewData) => {
                const { id, author, rating, content, menu } = reviewData;
                return (
                  <StoreReviewItem
                    key={id}
                    reviewInfo={{ id, author, rating, content, menu }}
                  />
                );
              })}
          </InfiniteScroll>
        </S.ReviewListWrapper>
      </S.StoreReviewContentWrapper>
      <S.ReviewPlusButton onClick={onReviewOpenClick}>+</S.ReviewPlusButton>
      {isReviewOpen && (
        <ReviewInputBottomSheet
          closeSheet={() => setIsReviewOpen(false)}
          restaurantId={restaurantId}
          onSuccess={() => {
            refetch();
          }}
        />
      )}
    </S.StoreDetailPageContainer>
  ) : null;
}

export default StoreDetailPage;
