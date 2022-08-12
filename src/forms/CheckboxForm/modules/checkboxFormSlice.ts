import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export type CheckboxForm = {
  formId: number;
  checked1: boolean;
  checked2: boolean;
  checked3: boolean;
};

export const checkboxFormAdapter = createEntityAdapter<CheckboxForm>({
  selectId: (form) => form.formId,
});

export const { actions, reducer } = createSlice({
  name: "checkboxForm",
  initialState: checkboxFormAdapter.getInitialState(),
  reducers: {
    add: checkboxFormAdapter.addOne,
    update: checkboxFormAdapter.updateOne,
  },
});
