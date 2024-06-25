import { Store } from "types/common";

export const ACTION_TYPES = {
  SET_BOARD: "SET_BOARD",
  SPIN: "SPIN",
  SHOW_RESULT: "SHOW_RESULT",
  RESET: "RESET",
} as const;

type State = {
  triggerAnimation: boolean;
  rouletteBoard: string[];
  pickedIndex: number | null;
  result: Store | undefined;
  isResultOpen: boolean;
};

type Action =
  | {
      type: typeof ACTION_TYPES.SET_BOARD;
      payload: Pick<State, "rouletteBoard">;
    }
  | {
      type: typeof ACTION_TYPES.SPIN;
      payload: Pick<State, "pickedIndex" | "rouletteBoard">;
    }
  | {
      type: typeof ACTION_TYPES.SHOW_RESULT;
      payload: Pick<State, "result" | "rouletteBoard">;
    }
  | {
      type: typeof ACTION_TYPES.RESET;
    };

export const initialState: State = {
  triggerAnimation: false,
  rouletteBoard: [],
  pickedIndex: null,
  result: undefined,
  isResultOpen: false,
};

export const randomRouletteStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_BOARD: {
      return { ...state, rouletteBoard: action.payload.rouletteBoard };
    }
    case ACTION_TYPES.SPIN: {
      const { pickedIndex, rouletteBoard } = action.payload;

      return {
        ...state,
        rouletteBoard,
        pickedIndex,
        triggerAnimation: true,
        isResultOpen: false,
      };
    }
    case ACTION_TYPES.SHOW_RESULT: {
      const { result, rouletteBoard } = action.payload;

      return {
        ...state,
        result,
        rouletteBoard,
        triggerAnimation: false,
        isResultOpen: true,
      };
    }
    case ACTION_TYPES.RESET: {
      return {
        ...initialState,
      };
    }

    default:
      return initialState;
  }
};
