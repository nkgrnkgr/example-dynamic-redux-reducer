import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export type InputTextForm = {
  formId: number;
  inputValue: string;
};

export const inputTextFormAdapter = createEntityAdapter<InputTextForm>({
  selectId: (form) => form.formId,
});

export const { actions, reducer } = createSlice({
  name: "inputTextForms",
  initialState: inputTextFormAdapter.getInitialState(),
  reducers: {
    add: inputTextFormAdapter.addOne,
    update: inputTextFormAdapter.updateOne,
  },
});
