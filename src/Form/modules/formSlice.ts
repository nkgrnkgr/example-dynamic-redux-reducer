import { createSlice, PayloadAction, TaskAbortError } from "@reduxjs/toolkit";
import { FormSchema, FormName } from "./types";

type State = {
  formSchemas: FormSchema[];
  selectedFormName: FormName;
};

const initialState: State = {
  formSchemas: [
    {
      formId: 1,
      formName: "text",
    },
  ],
  selectedFormName: "text",
};

export const { actions, reducer } = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm(state) {
      const { formId } = state.formSchemas.sort((a, b) => a.formId - b.formId)[
        state.formSchemas.length - 1
      ];
      state.formSchemas.push({
        formId: formId + 1,
        formName: state.selectedFormName,
      });
    },
    selectFormName(state, action: PayloadAction<FormName>) {
      state.selectedFormName = action.payload;
    },
  },
});
