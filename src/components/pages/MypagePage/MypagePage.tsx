import * as S from "./MypagePage.style";
import UserProfile from "./UserProfile/UserProfile";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { NETWORK, SIZE } from "constants/api";
import { PATHNAME } from "constants/routes";

import { RightIcon } from "asset";

import fetchBookmarkList from "api/bookmark/fetchBookmarkList";
import fetchUserProfile from "api/mypage/fetchUserProfile";

import Divider from "components/common/Divider/Divider";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";
import Text from "components/common/Text/Text";

function MypagePage() {
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useQuery("userProfile", () => fetchUserProfile(), {
    retry: NETWORK.RETRY_COUNT,
    refetchOnWindowFocus: false,
  });

  const { data: bookmarkedStoreData = [] } = useQuery(
    "bookmarkedStore",
    () => fetchBookmarkList(),
    {
      retry: NETWORK.RETRY_COUNT,
      refetchOnWindowFocus: false,
    }
  );

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
        {isError && error instanceof Error && (
          <ErrorImage errorMessage={error.message} />
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
    </S.Container>
  );
}

export default MypagePage;
