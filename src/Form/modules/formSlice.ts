import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormName, FormSchema } from "./types";

type State = {
  formSchemas: FormSchema[];
  selectedFormName: FormName;
};

const initialState: State = {
  formSchemas: [],
  selectedFormName: "text",
};

export const { actions, reducer } = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<{ formId: number }>) {
      const { formId } = action.payload;
      state.formSchemas.push({
        formId,
        formName: state.selectedFormName,
      });
    },

    selectFormName(state, action: PayloadAction<FormName>) {
      state.selectedFormName = action.payload;
    },
  },
});
