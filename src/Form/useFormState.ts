import { useDispatch, useSelector } from "react-redux";
import { actions as checkboxFormActions } from "../forms/CheckboxForm/modules/checkboxFormSlice";
import { actions as inputTextFormActions } from "../forms/InputTextForm/modules/inputTextFormSlice";
import { AppDispatch, RootState } from "../store";
import { actions as formActions } from "./modules/formSlice";

import { createFormId } from "../createFormId";
import { FormName } from "./modules/types";

export const useFormState = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { formSchemas, selectedFormName } = useSelector<
    RootState,
    RootState["form"]
  >((state) => state.form);

  const addForm = () => {
    const formId = createFormId();
    dispatch(formActions.addForm({ formId }));

    switch (selectedFormName) {
      case "text":
        dispatch(
          inputTextFormActions.add({
            formId,
            inputValue: "",
          })
        );
        return;
      case "checkbox":
        dispatch(
          checkboxFormActions.add({
            formId,
            checked1: false,
            checked2: false,
            checked3: false,
          })
        );
        return;
      default: {
        throw new Error();
      }
    }
  };

  const selectFormName = (formName: FormName) =>
    dispatch(formActions.selectFormName(formName));

  const formValues: string[] = [];

  return {
    formSchemas,
    selectedFormName,
    selectFormName,
    addForm,
    formValues,
  };
};
