import MyReviewItem from "../MyReviewItem/MyReviewItem";
import * as S from "./MyReviewListPage.style";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { UserReview } from "types/common";

import { NETWORK } from "constants/api";
import { MESSAGES } from "constants/messages";
import { QUERY_KEY } from "constants/queryKey";
import { PATHNAME } from "constants/routes";

import getNextPageParam from "api/getNextPageParam";
import fetchUserReviewList from "api/mypage/fetchUserReviewList";

import Divider from "components/common/Divider/Divider";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import Spinner from "components/common/Spinner/Spinner";
import Text from "components/common/Text/Text";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";

function MyReviewListPage() {
  const { data, error, isLoading, isError, fetchNextPage, isFetching } =
    useInfiniteQuery(QUERY_KEY.myReviewList, fetchUserReviewList, {
      getNextPageParam,
      retry: NETWORK.NOT_RETRY_COUNT,
    });

  const loadMoreReviews = () => {
    if (!isError) {
      fetchNextPage();
    }
  };

  const reviews =
    data?.pages.reduce<UserReview[]>(
      (prevReviews, { reviews: currentReviews }) => [
        ...prevReviews,
        ...currentReviews,
      ],
      []
    ) || [];

  const navigate = useNavigate();

  const showToast = useToastContext();

  useEffect(() => {
    if (error instanceof Error && error.message === MESSAGES.LOGIN_REQUIRED) {
      showToast(error.message);
      navigate(PATHNAME.HOME);
    }
  }, [error]);

  return (
    <S.Container>
      <S.HeaderWrapper>
        <Text css={S.headerStyle}>나의 리뷰</Text>
      </S.HeaderWrapper>
      <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
        {(isLoading || isFetching) && <Spinner />}
        {isError && error instanceof Error ? (
          <ErrorImage errorMessage={error.message} />
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <S.ReviewItemWrapper key={review.id}>
              <MyReviewItem {...review} />
              <Divider />
            </S.ReviewItemWrapper>
          ))
        ) : (
          <ErrorText>작성된 리뷰가 없습니다.</ErrorText>
        )}
      </InfiniteScroll>
    </S.Container>
  );
}

export default MyReviewListPage;
