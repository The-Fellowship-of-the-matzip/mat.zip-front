import { useMemo, useState, useEffect } from "react";
import { useQuery } from "react-query";

import { NETWORK, SIZE } from "constants/api";

import fetchRandomStoreList from "api/fetchRandomStoreList";

import ErrorImage from "components/common/ErrorImage/ErrorImage";
import Spinner from "components/common/Spinner/Spinner";
import StoreListItem from "components/common/StoreListItem/StoreListItem";

import * as S from "components/pages/CategoryPage/RandomPick/RandomPick.style";

import { Store } from "mock/data";

type Props = {
  campusId: 1 | 2;
};

const getRandomNumber = (max: number) => Math.floor(Math.random() * (max - 1));
const createArray = <T,>(arr: T[], n: number) => {
  const repeat = Array<T[]>(n).fill(arr).flat();
  return repeat;
};

function RandomPick({ campusId }: Props) {
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

  const storeNamesArray =
    stores !== undefined ? stores.map((store) => store.name) : [];

  const rouletteBaseArray = useMemo(
    () => (stores !== undefined ? createArray(storeNamesArray, 20) : null),
    [stores]
  );

  const [runAnimation, setAnimation] = useState(false);
  const [rouletteBoard, setRouletteBoard] = useState(rouletteBaseArray || []);
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const [result, setResult] = useState<Store>();
  const [showResult, setShowResult] = useState(false);

  const handleRunClick = () => {
    if (result !== undefined) return;
    const randomIndex = getRandomNumber(storeNamesArray.length);
    setPickedIndex(
      randomIndex === 0 ? storeNamesArray.length - 1 : randomIndex - 1
    );
    setRouletteBoard((prev) => {
      return prev.concat(storeNamesArray.slice(0, randomIndex));
    });
    setAnimation(true);
  };

  const softReset = () => {
    if (rouletteBaseArray === null) return;
    setRouletteBoard(rouletteBaseArray);
    setPickedIndex(null);
    setResult(undefined);
    setAnimation(false);
    setShowResult(false);
  };

  const hardReset = () => {
    softReset();
    refetch();
  };

  const getResult = () => {
    setShowResult(true);
  };

  useEffect(() => {
    if (!stores || pickedIndex === null) return;
    setResult(stores[pickedIndex]);
  }, [pickedIndex]);

  useEffect(() => {
    setRouletteBoard(rouletteBaseArray || []);
  }, [rouletteBaseArray]);

  return (
    <S.Container>
      {isLoading && <Spinner />}
      {isError && error instanceof Error && (
        <ErrorImage errorMessage={error.message} />
      )}
      <S.RecommendBlock>
        <S.Label>오늘은 </S.Label>
        <S.Outer>
          <S.Inner runAnimation={runAnimation} onAnimationEnd={getResult}>
            {rouletteBoard.map((store, index) => (
              <S.RouletteSlot key={store + index}>{store}</S.RouletteSlot>
            ))}
          </S.Inner>
        </S.Outer>
        <S.Label>어때요?</S.Label>
      </S.RecommendBlock>
      {!showResult ? (
        <S.CustomButton
          onClick={handleRunClick}
          disabled={result !== undefined}
        >
          룰렛 Go!
        </S.CustomButton>
      ) : (
        <S.ButtonContainer>
          <S.CustomButton onClick={softReset} disabled={result === undefined}>
            다시 돌리기
          </S.CustomButton>
          <S.CustomButton onClick={hardReset} disabled={result === undefined}>
            식당 리셋하기
          </S.CustomButton>
        </S.ButtonContainer>
      )}
      {showResult && result !== undefined && (
        <S.ResultWrapper>
          <StoreListItem
            id={result.id}
            thumbnailUrl={result.imageUrl}
            name={result.name}
            distance={result.distance}
            rating={result.rating}
          />
        </S.ResultWrapper>
      )}
    </S.Container>
  );
}

export default RandomPick;
