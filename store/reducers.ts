import { useReducer } from 'react';

import type { SiteByKeyword } from '@/types';
import type { AppAction } from './actions';

interface AppState {
  sitesByKeyword: SiteByKeyword[]
}

const appInitialState: AppState = {
  sitesByKeyword: [],
};

interface AppReducerIndex {
  [key: string]: () => AppState
}

function appReducer(state: AppState, { type, payload }: AppAction): AppState {
  const index: AppReducerIndex = {
    UPDATE_SITES_BY_KEYWORD() {
      const { sitesByKeyword } = payload;

      return {
        ...state,
        sitesByKeyword,
      };
    },

    default() {
      throw new Error('Unhandled action');
    },
  };

  return (index[type] || index.default)();
}

// eslint-disable-next-line import/prefer-default-export
export function useAppStore() {
  return useReducer(appReducer, appInitialState);
}
