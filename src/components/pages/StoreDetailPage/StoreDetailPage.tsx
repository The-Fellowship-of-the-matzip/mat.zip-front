import { AxiosError } from "axios";
import { Fragment, useContext, useState } from "react";
import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { ReviewInputShape, ReviewShape } from "types/common";

import { NETWORK } from "constants/api";
import { MESSAGES } from "constants/messages";
import { QUERY_KEY } from "constants/queryKey";
import { PATHNAME } from "constants/routes";

import { PlusIcon } from "asset";

import { LoginContext } from "context/LoginContextProvider";

import useLogin from "hooks/useLogin";

import getNextPageParam from "api/getNextPageParam";
import fetchReviewList from "api/review/fetchReviewList";
import sendReviewPostRequest from "api/review/sendReviewPostRequest";
import fetchStoreDetail from "api/store/fetchStoreDetail";

import Button from "components/common/Button/Button";
import Divider from "components/common/Divider/Divider";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import Heading from "components/common/Heading/Heading";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import Spinner from "components/common/Spinner/Spinner";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";

import ReviewBottomSheet from "components/pages/StoreDetailPage/ReviewBottomSheet/ReviewBottomSheet";
import * as S from "components/pages/StoreDetailPage/StoreDetailPage.style";
import StoreDetailSkeleton from "components/pages/StoreDetailPage/StoreDetailSkeleton/StoreDetailSkeleton";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";

function StoreDetailPage() {
  const { storeId: restaurantId } = useParams();
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const isLoggedIn = useContext(LoginContext);

  const { data: storeData } = useQuery(
    QUERY_KEY.storeDetailInfo,
    () => fetchStoreDetail(restaurantId as string),
    {
      retry: NETWORK.RETRY_COUNT,
      refetchOnWindowFocus: false,
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
    QUERY_KEY.reviewDetailStore(restaurantId),
    fetchReviewList,
    { getNextPageParam, refetchOnWindowFocus: false }
  );

  const { logout } = useLogin();
  const navigate = useNavigate();

  const handleSubmitError = (error: AxiosError) => {
    if (error.message === MESSAGES.LOGIN_REQUIRED) {
      showToast(error.message);
      logout();
      navigate(PATHNAME.HOME);
    }
  };

  const mutation = useMutation<unknown, AxiosError, ReviewInputShape>(
    sendReviewPostRequest(restaurantId as string),
    {
      onSuccess: () => {
        refetch();
      },
      onError: handleSubmitError,
      retry: 0,
    }
  );

  const loadMoreReviews = () => {
    fetchNextPage();
  };

  const showToast = useToastContext();

  const handleReviewOpenClick = () => {
    if (isLoggedIn) {
      setIsReviewOpen(true);
      return;
    }
    showToast(MESSAGES.LOGIN_REQUIRED);
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

  if (isFetching) return <StoreDetailSkeleton />;

  return (
    <S.StoreDetailPageContainer>
      <S.StorePreviewImage
        alt={`${storeData.name} 가게 이미지`}
        src={storeData?.thumbnailUrl}
      />
      <S.StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={storeData} />
        <S.ReviewListContainer>
          <Heading size="xs">리뷰</Heading>
          <S.ReviewListWrapper>
            <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
              {(isLoading || isFetching) && <Spinner />}
              {isError && error instanceof Error && (
                <ErrorImage errorMessage={error.message} />
              )}
              {reviews.length > 0
                ? reviews.map(
                    ({
                      id,
                      author,
                      rating,
                      content,
                      menu,
                      imageUrl,
                      updatable,
                    }) => (
                      <Fragment key={id}>
                        <StoreReviewItem
                          reviewInfo={{
                            restaurantId,
                            id,
                            author,
                            rating,
                            content,
                            menu,
                            imageUrl,
                            updatable,
                          }}
                        />
                        <Divider />
                      </Fragment>
                    )
                  )
                : !isFetching && <ErrorText>작성된 리뷰가 없습니다.</ErrorText>}
              {(isLoading || isFetching) && <Spinner position="static" />}
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
        <ReviewBottomSheet
          closeSheet={() => setIsReviewOpen(false)}
          mutate={mutation.mutate}
        />
      )}
    </S.StoreDetailPageContainer>
  );
}

export default StoreDetailPage;
