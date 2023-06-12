import { useState, useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import type { Campus } from "types/campus";

import { NETWORK } from "constants/api";
import { getCampusId } from "constants/campus";

import { campusContext } from "context/CampusContextProvider";
import { LoginContext } from "context/LoginContextProvider";

import getNextPageParam from "api/getNextPageParam";
import fetchStoreDemandList from "api/store/fetchStoreDemandList";

import Button from "components/common/Button/Button";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";

import StoreDemandCreateBottomSheet from "components/pages/StoreDemandPage/StoreDemandBottomSheet/StoreDemandCreateBottomSheet";
import StoreDemandList from "components/pages/StoreDemandPage/StoreDemandList/StoreDemandList";
import * as S from "components/pages/StoreDemandPage/StoreDemandPage.style";

function StoreDemandPage() {
  const isLoggedIn = useContext(LoginContext);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();

  const campus = useContext(campusContext);
  const campusId = getCampusId(campus as Campus);

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ["StoreDemand", { campusId: campusId, size: 15 }],
    fetchStoreDemandList,
    {
      getNextPageParam,
      retry: NETWORK.RETRY_COUNT,
    }
  );

  const storeRequests =
    data?.pages.reduce<StoreDemand[]>(
      (stores, page) => [...stores, ...page.items],
      []
    ) || [];

  const handleRequestSheetOpen = () => {
    if (!isLoggedIn) {
      alert("로그인 후 작성해주세요");
      return;
    }
    setSheetOpen(true);
  };
  return (
    <S.Container>
      <Button
        css={S.requestButtonStyle}
        variant="primary"
        size="small"
        onClick={handleRequestSheetOpen}
      >
        요청하기
      </Button>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        식당 추가 요청 게시판
      </SectionHeader>
      {isError && error instanceof Error && (
        <ErrorImage errorMessage={error.message} />
      )}
      {(isLoading || isFetching) && <Spinner />}
      {storeRequests.length ? (
        <InfiniteScroll handleContentLoad={fetchNextPage} hasMore={true}>
          <StoreDemandList
            storeRequests={storeRequests}
            refetchList={refetch}
          />
        </InfiniteScroll>
      ) : (
        <ErrorText>가게 정보가 없습니다.</ErrorText>
      )}
      {isSheetOpen && (
        <StoreDemandCreateBottomSheet
          closeSheet={() => setSheetOpen(false)}
          refetchList={refetch}
        />
      )}
    </S.Container>
  );
}

export default StoreDemandPage;
