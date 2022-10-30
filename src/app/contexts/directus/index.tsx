import { createContext, useContext } from 'react';

import { DirectusContextState } from './types';

export * from './useInitDirectusContext';

const DirectusContext = createContext<DirectusContextState>(
  {} as DirectusContextState
);

export const useDirectusContext = () => useContext(DirectusContext);
export const DirectusContextProvider = DirectusContext.Provider;
