import { useState, useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useInfiniteQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { NETWORK } from "constants/api";

import { LoginContext } from "context/LoginContextProvider";

import fetchStoreRequests from "api/fetchStoreRequests";
import getNextPageParam from "api/getNextPageParam";

import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";

import StoreRequestBottomSheet from "components/pages/StoreRequestPage/StoreRequestBottomSheet/StoreRequestBottomSheet";
import StoreRequestList from "components/pages/StoreRequestPage/StoreRequestList/StoreRequestList";
import * as S from "components/pages/StoreRequestPage/StoreRequestPage.style";

function StoreRequestPage() {
  const isLoggedIn = useContext(LoginContext);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const { data, error, isLoading, isError, fetchNextPage, isFetching } =
    useInfiniteQuery(
      ["storeRequest", { campusId: 1, size: 15 }],
      fetchStoreRequests,
      {
        getNextPageParam,
        retry: NETWORK.RETRY_COUNT,
      }
    );

  const storeRequests =
    data?.pages.reduce<StoreRequest[]>(
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
      <S.CreateRequestButton onClick={handleRequestSheetOpen}>
        요청하기
      </S.CreateRequestButton>
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
          <StoreRequestList storeRequests={storeRequests} />
        </InfiniteScroll>
      ) : (
        <ErrorText>가게 정보가 없습니다.</ErrorText>
      )}
      {isSheetOpen && (
        <StoreRequestBottomSheet closeSheet={() => setSheetOpen(false)} />
      )}
    </S.Container>
  );
}

export default StoreRequestPage;
