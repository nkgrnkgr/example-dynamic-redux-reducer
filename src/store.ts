import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "./Form/modules/formSlice";

const rootReducer = combineReducers({
  form: formReducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const _storeForType = createStore();

export type RootState = ReturnType<typeof _storeForType.getState>;

export type AppDispatch = typeof _storeForType.dispatch;
