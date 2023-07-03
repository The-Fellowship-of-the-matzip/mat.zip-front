import * as S from "./BookmarkListPage.style";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { NETWORK } from "constants/api";
import { PATHNAME } from "constants/routes";

import { LeftIcon } from "asset";

import fetchBookmarkList from "api/bookmark/fetchBookmarkList";

import Button from "components/common/Button/Button";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";
import Text from "components/common/Text/Text";

function BookmarkListPage() {
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isError, error } = useQuery(
    "bookmarkStore",
    () => fetchBookmarkList(),
    {
      retry: NETWORK.RETRY_COUNT,
      refetchOnWindowFocus: false,
    }
  );

  const bookmarkedStoreData = data ?? [];

  return (
    <S.Container>
      <S.HeaderWrapper>
        <LeftIcon onClick={() => navigate(-1)} />
        <Text css={S.headerStyle}>나의 맛집</Text>
        <Button
          css={S.headerButtonStyle}
          variant="textButton"
          onClick={() => navigate(PATHNAME.BOOKMARK_MAP_PAGE)}
        >
          지도
        </Button>
      </S.HeaderWrapper>
      {(isLoading || isFetching) && <Spinner />}
      {isError && error instanceof Error && (
        <ErrorImage errorMessage={error.message} />
      )}
      {bookmarkedStoreData.length > 0 ? (
        <StoreList stores={bookmarkedStoreData} />
      ) : (
        <ErrorText>가게 정보가 없습니다.</ErrorText>
      )}
    </S.Container>
  );
}

export default BookmarkListPage;
