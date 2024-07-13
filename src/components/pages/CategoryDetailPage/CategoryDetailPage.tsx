import { useEffect, useState } from "react";
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { TbArrowsUpDown } from "react-icons/tb";
import { useInfiniteQuery } from "react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Campus, CategoryId, StoreItemWithHeart } from "types/common";

import {
  NETWORK,
  SIZE,
  FilterOption,
  STORE_FILTER_OPTIONS,
  entries,
} from "constants/api";
import { getCampusId } from "constants/campus";
import { categories } from "constants/categories";
import { MESSAGES } from "constants/messages";
import { QUERY_KEY } from "constants/queryKey";
import { PATHNAME } from "constants/routes";

import { Check } from "asset";

import { campusContext } from "context/CampusContextProvider";

import getNextPageParam from "api/getNextPageParam";
import fetchStoreList from "api/store/fetchStoreList";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import Button from "components/common/Button/Button";
import Chip from "components/common/Chip/Chip";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import ErrorText from "components/common/ErrorText/ErrorText";
import InfiniteScroll from "components/common/InfiniteScroll/InfiniteScroll";
import SectionHeader from "components/common/SectionHeader/SectionHeader";
import Spinner from "components/common/Spinner/Spinner";
import StoreList from "components/common/StoreList/StoreList";
import Text from "components/common/Text/Text";

import * as S from "components/pages/CategoryDetailPage/CategoryDetailPage.style";

function CategoryDetailPage() {
  const navigate = useNavigate();

  const [isFilteringBottomSheetOpen, setIsFilteringBottomSheetOpen] =
    useState(false);
  const openSheet = () => setIsFilteringBottomSheetOpen(true);
  const closeSheet = () => setIsFilteringBottomSheetOpen(false);

  const campusName = useContext(campusContext);
  const campusId = getCampusId(campusName as Campus);
  const { categoryId } = useParams();

  const [filter, setFilter] = useState<FilterOption>("basic");

  const fetchParams = { size: SIZE.LIST_ITEM, filter, campusId, categoryId };

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(QUERY_KEY.categoryStore(fetchParams), fetchStoreList, {
    getNextPageParam,
    retry: NETWORK.RETRY_COUNT,
    refetchOnWindowFocus: false,
  });

  const loadMoreStores = () => {
    fetchNextPage();
  };

  const handleClickFilterOption = (option: FilterOption) => {
    if (filter === option) return;
    setFilter(option);
  };

  const currentOption = STORE_FILTER_OPTIONS[filter];

  const categoryStores =
    data?.pages.reduce<StoreItemWithHeart[]>(
      (stores, page) => [...stores, ...page.restaurants],
      []
    ) || [];

  useEffect(() => {
    refetch();
  }, [filter]);

  const isValidCategoryId = (categoryId: string): categoryId is CategoryId => {
    return categoryId in categories;
  };

  if (!categoryId || !Number(categoryId) || !isValidCategoryId(categoryId)) {
    window.alert(MESSAGES.WRONG_PATH);
    return <Navigate to={PATHNAME.HOME} />;
  }

  const categoryName = categories[categoryId] || MESSAGES.CATEGORY_FIND_FAILED;

  return (
    <S.CategoryDetailPageContainer>
      <SectionHeader>{categoryName || "%ERROR%"}</SectionHeader>
      <S.ChipContainer>
        <Chip onClick={openSheet}>
          <S.ChipContent>
            <TbArrowsUpDown />
            {currentOption}
          </S.ChipContent>
        </Chip>
      </S.ChipContainer>
      <InfiniteScroll handleContentLoad={loadMoreStores} hasMore={true}>
        {(isLoading || isFetching) && <Spinner />}
        {isError && error instanceof Error && (
          <ErrorImage errorMessage={error.message} />
        )}
        {categoryStores.length ? (
          <StoreList<StoreItemWithHeart>
            stores={categoryStores}
            renderListItem={(store) => <StoreListItemWithHeart {...store} />}
          />
        ) : (
          <ErrorText>가게 정보가 없습니다.</ErrorText>
        )}
      </InfiniteScroll>
      {isFilteringBottomSheetOpen && (
        <BottomSheet
          title="정렬"
          closeSheet={closeSheet}
          cssProps={{
            heading: {
              display: "flex",
              justifyContent: "center",
              fontSize: "1.8rem",
              lineHeight: "2.4rem",
              fontWeight: "400",
            },
          }}
        >
          <S.FilterOptionContainer>
            {entries(STORE_FILTER_OPTIONS).map(([key, value]) => {
              return (
                <S.FilterOption
                  onClick={() => {
                    handleClickFilterOption(key);
                    closeSheet();
                  }}
                  key={key}
                >
                  <Text>{value}</Text>
                  {filter === key && <Check />}
                </S.FilterOption>
              );
            })}
            <Button variant="primary">닫기</Button>
          </S.FilterOptionContainer>
        </BottomSheet>
      )}
    </S.CategoryDetailPageContainer>
  );
}

export default CategoryDetailPage;
