'use client';

import React from 'react';

export type Store = {
  counts: {
    episode: number;
    location: number;
    character: number;
  };
};

export interface StoreContextProps {
  store: Store;
}

export const INITIAL_STORE: Store = {
  counts: {
    episode: 0,
    location: 0,
    character: 0
  }
};

export const StoreContext = React.createContext<StoreContextProps>({
  store: INITIAL_STORE
});

interface StoreProviderProps {
  children: React.ReactNode;
  value: Store;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children, value }) => {
  return <StoreContext.Provider value={{ store: value }}>{children}</StoreContext.Provider>;
};

export const useStore = () => React.useContext(StoreContext).store;

export default StoreProvider;
