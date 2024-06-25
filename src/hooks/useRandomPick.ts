import { useEffect, useMemo, useReducer } from "react";
import { useQuery } from "react-query";
import { CampusId } from "types/common";
import { createArray, getRandomNumber } from "util/randomUtils";

import { NETWORK, SIZE } from "constants/api";

import fetchRandomStoreList from "api/store/fetchRandomStoreList";

import {
  ACTION_TYPES,
  initialState,
  randomRouletteStateReducer,
} from "components/pages/CategoryPage/RandomRoulette/randomRouletteStateReducer";

function useRandomPick(campusId: CampusId) {
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

  const [state, dispatch] = useReducer(
    randomRouletteStateReducer,
    initialState
  );

  const storeNamesArray = stores?.map((store) => store.name) || [];

  const rouletteBaseArray = useMemo(() => {
    return stores !== undefined ? createArray(storeNamesArray, 20) : null;
  }, [stores]);

  const setRoulette = () => {
    if (!rouletteBaseArray) return;

    const rouletteBoard =
      state.pickedIndex === null
        ? [...rouletteBaseArray]
        : [...rouletteBaseArray, rouletteBaseArray[state.pickedIndex]];

    dispatch({
      type: ACTION_TYPES.SET_BOARD,
      payload: {
        rouletteBoard,
      },
    });
  };

  const showResult = () => {
    if (!stores || state.pickedIndex === null || !rouletteBaseArray) return;

    const randomRouletteResult = stores[state.pickedIndex];
    const randomRouletteResultBoard = [randomRouletteResult.name];

    dispatch({
      type: ACTION_TYPES.SHOW_RESULT,
      payload: {
        rouletteBoard: randomRouletteResultBoard,
        result: randomRouletteResult,
      },
    });
  };

  const startSpin = (randomNumber: number) => {
    if (!rouletteBaseArray) return;

    const rouletteBoard = [
      ...rouletteBaseArray,
      rouletteBaseArray[randomNumber],
    ];

    dispatch({
      type: ACTION_TYPES.SPIN,
      payload: {
        pickedIndex: randomNumber,
        rouletteBoard,
      },
    });
  };

  const handleRunClick = () => {
    const randomIndex = getRandomNumber(storeNamesArray.length);
    startSpin(randomIndex);
  };

  const resetHard = async () => {
    await refetch();
    dispatch({
      type: ACTION_TYPES.RESET,
    });
  };

  const refetchAndStartSpin = async () => {
    await refetch();
    handleRunClick();
  };

  useEffect(() => {
    setRoulette();
  }, [stores]);

  return {
    isLoading,
    isError,
    error,
    state,
    handleRunClick,
    showResult,
    resetHard,
    refetchAndStartSpin,
  };
}

export default useRandomPick;
