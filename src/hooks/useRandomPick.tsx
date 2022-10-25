import { useEffect, useMemo, useReducer } from "react";
import { createArray, getRandomNumber } from "util/randomUtils";

import {
  ACTION_TYPES,
  initialState,
  reducer,
} from "components/pages/CategoryPage/RandomPick/reducer";

import { Store } from "mock/data";

function useRandomPick(stores: Store[]) {
  const storeNamesArray = stores?.map((store) => store.name) || [];

  const rouletteBaseArray = useMemo(
    () => (stores !== undefined ? createArray(storeNamesArray, 20) : null),
    [stores]
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const setRoulette = () => {
    const rouletteBaseArray = createArray(storeNamesArray, 20);
    dispatch({
      type: ACTION_TYPES.SET_BOARD,
      payload: { rouletteBoard: rouletteBaseArray || [] },
    });
  };

  const startSpin = (stores: Store[], randomNumber: number) => {
    if (stores === undefined) return;
    dispatch({
      type: ACTION_TYPES.SPIN,
      payload: {
        pickedIndex: randomNumber,
        result: stores[randomNumber],
        rouletteBoard: state.rouletteBoard.concat(
          storeNamesArray.slice(0, randomNumber + 1)
        ),
      },
    });
  };

  const openResult = () => {
    dispatch({
      type: ACTION_TYPES.SHOW_RESULT,
    });
  };

  const reset = () => {
    dispatch({
      type: ACTION_TYPES.RESET,
      payload: { rouletteBoard: rouletteBaseArray || [] },
    });
  };

  const handleRunClick = () => {
    if (state.result !== undefined) return;
    const randomIndex = getRandomNumber(storeNamesArray.length);
    startSpin(stores, randomIndex);
  };

  useEffect(() => {
    setRoulette();
  }, [stores]);

  return { state, handleRunClick, openResult, reset };
}

export default useRandomPick;
