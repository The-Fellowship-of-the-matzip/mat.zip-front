import axios from "axios";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";

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

function StoreDetailPage() {
  const { storeId: restaurantId } = useParams();
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const accessToken = window.sessionStorage.getItem("accessToken");

  const fetchStoreDetailInfo = async () => {
    const { data } = await axios.get<Store & { address: string }>(`
    https://matzip.link/api/restaurants/${restaurantId}
    `);
    return data;
  };

  const fetchStoreDetailList = async ({ pageParam = 0 }) => {
    const { data } =
      await axios.get<ReviewResponseShape>(`https://matzip.link/api/restaurants/${restaurantId}/reviews?page=${pageParam}&size=${5}
    `);
    return { ...data, nextPageParam: pageParam + 1 };
  };

  const { data: storeData } = useQuery("storeDetailInfo", fetchStoreDetailInfo);

  const {
    data: reviewData,
    error: reviewError,
    isLoading: IsReviewLoading,
    isError: isReviewError,
    refetch,
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
    fetchNextPage();
  };

  const onReviewOpenClick = () => {
    if (accessToken) {
      setIsReviewOpen(true);
      return;
    }
    alert("로그인 후 사용해주세요");
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
      <S.ReviewPlusButton onClick={onReviewOpenClick}>+</S.ReviewPlusButton>
      {isReviewOpen && (
        <ReviewInputBottomSheet
          closeSheet={() => setIsReviewOpen(false)}
          onSubmit={onSubmitReview}
          restaurantId={Number(restaurantId)}
          onSuccess={() => {
            refetch();
          }}
        />
      )}
    </S.StoreDetailPageContainer>
  ) : null;
}

export default StoreDetailPage;
