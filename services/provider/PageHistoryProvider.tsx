import {
  createContext, useContext, useMemo, ReactNode,
} from 'react';
import type { Dispatch } from 'react';

import useGlobalState, { initialGlobalState } from './reducer';
import type { GlobalState } from './reducer';
import type { GlobalStateAction } from './actions';

const GlobalStateContext = createContext<GlobalState>(initialGlobalState);
const DispatchContext = createContext<Dispatch<GlobalStateAction>>(() => {});

export default function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [globalState, dispatch] = useGlobalState();

  return (
    <DispatchContext.Provider value={useMemo(() => dispatch, [dispatch])}>
      <GlobalStateContext.Provider value={useMemo(() => globalState, [globalState])}>
        {children}
      </GlobalStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export function useGlobalStateValue() {
  const value = useContext(GlobalStateContext);

  if (value === undefined) {
    throw new Error('useGlobalStateValue should be used within GlobalStateProvider');
  }

  return value;
}

export function useGlobalStateDispatch() {
  const value = useContext(DispatchContext);

  if (value === undefined) {
    throw new Error('useGlobalStateDispatch should be used within GlobalStateProvider');
  }

  return value;
}
