import { Fragment, useContext, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { NETWORK } from "constants/api";
import { MESSAGES } from "constants/messages";

import { PlusIcon } from "asset";

import { LoginContext } from "context/LoginContextProvider";

import getNextPageParam from "api/getNextPageParam";
import type { ReviewShape } from "api/review/fetchReviewList";
import fetchReviewList from "api/review/fetchReviewList";
import fetchStoreDetail from "api/store/fetchStoreDetail";

import Button from "components/common/Button/Button";
import Divider from "components/common/Divider/Divider";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import Heading from "components/common/Heading/Heading";
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
        <S.ReviewListContainer>
          <Heading size="xSmall">리뷰</Heading>
          <S.ReviewListWrapper>
            <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
              {(isLoading || isFetching) && <Spinner />}
              {isError && error instanceof Error && (
                <ErrorImage errorMessage={error.message} />
              )}
              {reviews.length ? (
                reviews.map(
                  ({ id, author, rating, content, menu, updatable }) => (
                    <Fragment key={id}>
                      <StoreReviewItem
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
                      <Divider />
                    </Fragment>
                  )
                )
              ) : (
                <ErrorText>작성된 리뷰가 없습니다.</ErrorText>
              )}
            </InfiniteScroll>
          </S.ReviewListWrapper>
        </S.ReviewListContainer>
      </S.StoreReviewContentWrapper>
      <Button
        css={S.reviewButtonStyle}
        variant="primary"
        size="large"
        onClick={handleReviewOpenClick}
      >
        <PlusIcon />
      </Button>
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
