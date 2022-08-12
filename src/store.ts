import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "./Form/modules/formSlice";
import { reducer as inputTextFormSlice } from "./forms/InputTextForm/modules/inputTextFormSlice";
import { reducer as checkboxFormSlice } from "./forms/CheckboxForm/modules/checkboxFormSlice";

const rootReducer = combineReducers({
  form: formReducer,
  inputTextForm: inputTextFormSlice,
  checkboxForm: checkboxFormSlice,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const _storeForType = createStore();

export type RootState = ReturnType<typeof _storeForType.getState>;

export type AppDispatch = typeof _storeForType.dispatch;
