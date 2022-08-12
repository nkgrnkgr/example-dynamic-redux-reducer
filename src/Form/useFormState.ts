import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { actions as formActions } from "./modules/formSlice";
import { actions as inputTextFormActions } from "../forms/InputTextForm/modules/inputTextFormSlice";
import { actions as checkboxFormActions } from "../forms/CheckboxForm/modules/checkboxFormSlice";

import { FormName } from "./modules/types";
import { createFormId } from "../createFormId";

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

  return {
    formSchemas,
    selectedFormName,
    selectFormName,
    addForm,
  };
};
