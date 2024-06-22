import * as S from "./MyPage.style";
import MyReviewItem from "./MyReviewItem/MyReviewItem";
import UserProfile from "./UserProfile/UserProfile";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { SIZE } from "constants/api";
import { PATHNAME } from "constants/routes";

import { RightIcon } from "asset";

import fetchBookmarkList from "api/bookmark/fetchBookmarkList";
import fetchUserProfile from "api/mypage/fetchUserProfile";
import fetchUserReviewList from "api/mypage/fetchUserReviewList";

import Divider from "components/common/Divider/Divider";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";
import Text from "components/common/Text/Text";
import { useEffect } from "react";
import { MESSAGES } from "constants/messages";

function MyPage() {
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading,
    isError,
    error: userProfileError,
  } = useQuery("userProfile", fetchUserProfile, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const { data: bookmarkedStoreData = [], error: bookmarkedStoreError } = useQuery(
    "bookmarkedStore",
    fetchBookmarkList,
    {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  );

  const { data: myReviewData, error: userReviewError } = useQuery("myReview", fetchUserReviewList, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  useEffect(() => {
    if (userProfileError instanceof Error && userProfileError.message === MESSAGES.LOGIN_RETRY) {
      alert(userProfileError.message);
      window.location.href = PATHNAME.HOME;
      return;
    }

    if (bookmarkedStoreError instanceof Error && bookmarkedStoreError.message === MESSAGES.LOGIN_RETRY) {
      alert(bookmarkedStoreError.message);
      window.location.href = PATHNAME.HOME;
      return;
    }

    if (userReviewError instanceof Error && userReviewError.message === MESSAGES.LOGIN_RETRY) {
      alert(userReviewError.message);
      window.location.href = PATHNAME.HOME;
    }
  }, [userProfileError, bookmarkedStoreError, userReviewError]);

  const myReviews = myReviewData?.reviews ?? [];

  if (!profileData) return null;

  return (
    <S.Container>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        마이페이지
      </SectionHeader>
      <section>
        {isLoading && <Spinner />}
        {isError && userProfileError instanceof Error && <ErrorImage errorMessage={userProfileError.message} />}
        <UserProfile {...profileData} />
      </section>
      <Divider />
      <section>
        <S.SectionHeaderWrapper>
          <SectionHeader>나의 맛집</SectionHeader>
          <S.ShowAllLink to={PATHNAME.BOOKMARK_LIST_PAGE}>
            <Text size="sm">전체보기</Text>
            <RightIcon />
          </S.ShowAllLink>
        </S.SectionHeaderWrapper>
        {bookmarkedStoreData.length > 0 ? (
          <StoreList stores={bookmarkedStoreData.slice(0, SIZE.MY_PAGE_ITEM)} />
        ) : (
          <S.EmptyList>
            <Text size="sm">저장된 맛집이 없습니다</Text>
          </S.EmptyList>
        )}
      </section>
      <section>
        <S.SectionHeaderWrapper>
          <SectionHeader>나의 리뷰</SectionHeader>
          <S.ShowAllLink to={PATHNAME.MY_REVIEWS}>
            <Text size="sm">전체보기</Text>
            <RightIcon />
          </S.ShowAllLink>
        </S.SectionHeaderWrapper>
        {myReviews.length > 0 ? (
          myReviews.slice(0, SIZE.MY_PAGE_ITEM).map((review) => (
            <S.ReviewItemWrapper>
              <MyReviewItem key={review.id} {...review} />
              <Divider />
            </S.ReviewItemWrapper>
          ))
        ) : (
          <S.EmptyList>
            <Text size="sm">작성한 리뷰가 없습니다</Text>
          </S.EmptyList>
        )}
      </section>
    </S.Container>
  );
}

export default MyPage;
