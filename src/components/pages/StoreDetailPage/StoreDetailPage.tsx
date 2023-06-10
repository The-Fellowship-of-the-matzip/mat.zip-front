import { useContext, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { NETWORK } from "constants/api";
import { MESSAGES } from "constants/messages";

import { LoginContext } from "context/LoginContextProvider";

import type { ReviewShape } from "api/fetchReviewList";
import fetchReviewList from "api/fetchReviewList";
import fetchStoreDetail from "api/fetchStoreDetail";
import getNextPageParam from "api/getNextPageParam";

import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import Spinner from "components/common/Spinner/Spinner";

import ReviewInputBottomSheet from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet";
import * as S from "components/pages/StoreDetailPage/StoreDetailPage.style";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";

function StoreDetailPage() {
  const { storeId: restaurantId } = useParams();
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const isLoggedIn = useContext(LoginContext);

  const { data: storeData } = useQuery(
    "storeDetailInfo",
    () => fetchStoreDetail(restaurantId as string),
    {
      retry: NETWORK.RETRY_COUNT,
    }
  );

  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["reviewDetailStore", { restaurantId }],
    fetchReviewList,
    { getNextPageParam }
  );

  const loadMoreReviews = () => {
    fetchNextPage();
  };

  const handleReviewOpenClick = () => {
    if (isLoggedIn) {
      setIsReviewOpen(true);
      return;
    }
    alert(MESSAGES.LOGIN_REQUIRED);
  };

  const reviews =
    data?.pages.reduce<ReviewShape[]>(
      (prevReviews, { reviews: currentReviews }) => [
        ...prevReviews,
        ...currentReviews,
      ],
      []
    ) || [];

  if (!restaurantId || !storeData) return null;
  return (
    <S.StoreDetailPageContainer>
      <S.StorePreviewImage
        alt={`${storeData.name} 가게 이미지`}
        src={storeData?.imageUrl}
      />
      <S.StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={storeData} />
        <S.ReviewListWrapper>
          <h2>리뷰</h2>
          <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
            {(isLoading || isFetching) && <Spinner />}
            {isError && error instanceof Error && (
              <ErrorImage errorMessage={error.message} />
            )}
            {reviews.length ? (
              reviews.map(
                ({ id, author, rating, content, menu, updatable }) => (
                  <StoreReviewItem
                    key={id}
                    reviewInfo={{
                      restaurantId,
                      id,
                      author,
                      rating,
                      content,
                      menu,
                      updatable,
                    }}
                  />
                )
              )
            ) : (
              <ErrorText>작성된 리뷰가 없습니다.</ErrorText>
            )}
          </InfiniteScroll>
        </S.ReviewListWrapper>
      </S.StoreReviewContentWrapper>
      <S.ReviewPlusButton onClick={handleReviewOpenClick}>+</S.ReviewPlusButton>
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
  );
}

export default StoreDetailPage;
