import * as S from "./MyPage.style";
import MyReviewItem from "./MyReviewItem/MyReviewItem";
import UserProfile from "./UserProfile/UserProfile";
import { useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { NETWORK, SIZE } from "constants/api";
import { MESSAGES } from "constants/messages";
import { PATHNAME } from "constants/routes";

import { RightIcon } from "asset";

import useLogin from "hooks/useLogin";

import fetchBookmarkList from "api/bookmark/fetchBookmarkList";
import fetchUserProfile from "api/mypage/fetchUserProfile";
import fetchUserReviewList from "api/mypage/fetchUserReviewList";

import Divider from "components/common/Divider/Divider";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";
import Text from "components/common/Text/Text";

function MyPage() {
  const navigate = useNavigate();
  const { logout } = useLogin();

  const {
    data: profileData,
    isLoading,
    isError,
    error: userProfileError,
  } = useQuery("userProfile", fetchUserProfile, {
    refetchOnWindowFocus: false,
    retry: NETWORK.NOT_RETRY_COUNT,
  });

  const { data: bookmarkedStoreData = [], error: bookmarkedStoreError } =
    useQuery("bookmarkedStore", fetchBookmarkList, {
      refetchOnWindowFocus: false,
      retry: NETWORK.NOT_RETRY_COUNT,
    });

  const { data: myReviewData, error: userReviewError } = useQuery(
    "myReview",
    fetchUserReviewList,
    {
      refetchOnWindowFocus: false,
      retry: NETWORK.NOT_RETRY_COUNT,
    }
  );

  useEffect(() => {
    if (
      userProfileError instanceof Error &&
      userProfileError.message === MESSAGES.LOGIN_RETRY
    ) {
      alert(userProfileError.message);
      navigate(PATHNAME.HOME);
      logout();
      return;
    }

    if (
      bookmarkedStoreError instanceof Error &&
      bookmarkedStoreError.message === MESSAGES.LOGIN_RETRY
    ) {
      alert(bookmarkedStoreError.message);
      logout();
      navigate(PATHNAME.HOME);
      return;
    }

    if (
      userReviewError instanceof Error &&
      userReviewError.message === MESSAGES.LOGIN_RETRY
    ) {
      alert(userReviewError.message);
      logout();
      navigate(PATHNAME.HOME);
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
        {isError && userProfileError instanceof Error && (
          <ErrorImage errorMessage={userProfileError.message} />
        )}
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
