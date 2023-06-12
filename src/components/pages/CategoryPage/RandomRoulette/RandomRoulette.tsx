import { useEffect } from "react";
import { useQuery } from "react-query";

import { NETWORK, SIZE } from "constants/api";

import useRandomPick from "hooks/useRandomPick";

import fetchRandomStoreList from "api/store/fetchRandomStoreList";

import Button from "components/common/Button/Button";
import ErrorImage from "components/common/ErrorImage/ErrorImage";
import Spinner from "components/common/Spinner/Spinner";
import StoreListItem from "components/common/StoreListItem/StoreListItem";
import Text from "components/common/Text/Text";

import * as S from "components/pages/CategoryPage/RandomRoulette/RandomRoulette.style";

type Props = {
  campusId: 1 | 2;
};

function RandomRoulette({ campusId }: Props) {
  const {
    data: stores,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    "randomStoreRoulette",
    () => fetchRandomStoreList(campusId, SIZE.RANDOM_ITEM),
    {
      retry: NETWORK.RETRY_COUNT,
      refetchOnWindowFocus: false,
    }
  );

  const {
    state: { rouletteBoard, isResultOpen, result, triggerAnimation },
    handleRunClick,
    openResult,
    reset,
  } = useRandomPick(stores || []);

  const resetHard = () => {
    refetch();
    reset();
  };

  useEffect(() => {
    resetHard();
  }, [campusId]);

  return (
    <S.Container>
      {isLoading && <Spinner />}
      {isError && error instanceof Error && (
        <ErrorImage errorMessage={error.message} />
      )}
      <S.RecommendBlock>
        <Text size="lg">오늘은 </Text>
        <S.Outer>
          <S.Inner runAnimation={triggerAnimation} onAnimationEnd={openResult}>
            {rouletteBoard.map((store, index) => (
              <S.RouletteSlot key={store + index}>{store}</S.RouletteSlot>
            ))}
          </S.Inner>
        </S.Outer>
        <Text size="lg">어때요?</Text>
      </S.RecommendBlock>
      {!isResultOpen ? (
        <Button
          variant="primary"
          size="small"
          onClick={handleRunClick}
          disabled={result !== undefined}
        >
          룰렛 Go!
        </Button>
      ) : (
        <S.ButtonContainer>
          <Button variant="primary" size="small" onClick={reset}>
            다시 돌리기
          </Button>
          <Button variant="primary" size="small" onClick={resetHard}>
            식당 리셋하기
          </Button>
        </S.ButtonContainer>
      )}
      {isResultOpen && result !== undefined && (
        <S.ResultWrapper>
          <StoreListItem
            id={result.id}
            thumbnailUrl={result.imageUrl}
            name={result.name}
            distance={result.distance}
            rating={result.rating}
            reviewCount={result.reviewCount}
          />
        </S.ResultWrapper>
      )}
    </S.Container>
  );
}

export default RandomRoulette;
