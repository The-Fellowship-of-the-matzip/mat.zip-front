import axios from "axios";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";

import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";

import ReviewInputBottomSheet from "components/pages/StoreDetailPage/ReviewInputBottomSheet/ReviewInputBottomSheet";
import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";
import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";
import * as S from "components/pages/StoreDetailPage/index.style";

function StoreDetailPage({ restaurantId = 0 }) {
  //TODO: 가게 정보에 대해서 부모 컴포넌트에서 받아와야 함
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [pageParam, setPageParam] = useState(0);

  const fetchStoreDetailList = async ({ pageParam = 0 }) => {
    const data =
      await axios.get(`/api/restaurants/${restaurantId}/reviews?page=${pageParam}&size=${5}
    `);
    return data;
  };

  const { data, error, isLoading, isError, fetchNextPage, isFetching } =
    useInfiniteQuery("reviewDetailStore", fetchStoreDetailList, {
      getNextPageParam: (lastPage) => {
        if (lastPage.hasNext) {
          setPageParam(pageParam + 1);
          return pageParam + 1;
        }
        setPageParam(0);
        return 0;
      },
    });

  const loadMoreReviews = () => {
    if (data.hasNext) {
      fetchNextPage();
    }
  };

  const onSubmitReview = () => {};

  const tempStoreInfo = {
    name: "치킨집",
    rating: 4.2,
    desc: "잠실 캠퍼스 기준 0.5km",
  };

  const tempReviewInfo = {
    userThumbnail:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 4,
    desc: "skdjflskjdfalkjsdfajaklsfd",
    menuName: "후라이드 치킨",
  };

  return (
    <S.StoreDetailPageContainer>
      <S.StoreThumbnailWrapper>
        <img alt="가게 이미지" src={tempReviewInfo.userThumbnail} />
      </S.StoreThumbnailWrapper>
      <S.StoreReviewContentWrapper>
        <StoreDetailTitle storeInfo={tempStoreInfo} />
        <S.ReviewListWrapper>
          <h2>리뷰</h2>
          <InfiniteScroll handleContentLoad={loadMoreReviews} hasMore={true}>
            {isLoading && <div>로딩중...</div>}
            {isError && <div>{error.message}</div>}
            {isFetching && <div>다음 페이지</div>}
            {data
              .map((item) => {
                return {
                  userThumbnail: item.reviewAuthor.profileImage,
                  rating: item.score,
                  desc: item.content,
                  menuName: item.menu,
                };
              })
              .map((reviewData, index) => (
                <StoreReviewItem key={index} reviewInfo={reviewData} />
              ))}
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
  );
}

export default StoreDetailPage;
