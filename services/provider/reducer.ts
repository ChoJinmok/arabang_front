import { useReducer } from 'react';

import type { GlobalStateAction } from './actions';

interface GlobalState {
  pageHistory: string;
}

interface GlobalStateReducerIndex {
  [key: string]: () => GlobalState
}

function globalStateReducer(state: GlobalState, { type, payload }: GlobalStateAction): GlobalState {
  const index: GlobalStateReducerIndex = {
    UPDATE_PAGE_HISTORY() {
      return {
        ...state,
        pageHistory: payload.page,
      };
    },

    default() {
      throw new Error('Unhandled action');
    },
  };

  return (index[type] || index.default)();
}

const initialGlobalState: GlobalState = {
  pageHistory: '',
};

export default function useGlobalState() {
  return useReducer(globalStateReducer, initialGlobalState);
}
