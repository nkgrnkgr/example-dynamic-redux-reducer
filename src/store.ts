import { configureStore } from "@reduxjs/toolkit";

export const createStore = () =>
  configureStore({
    reducer: {},
  });

const _storeForType = createStore();

export type RootState = ReturnType<typeof _storeForType.getState>;

export type AppDispatch = typeof _storeForType.dispatch;
