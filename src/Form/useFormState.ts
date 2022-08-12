import { useDispatch, useSelector } from "react-redux";
import {
  actions as checkboxFormActions,
  checkboxFormAdapter,
} from "../forms/CheckboxForm/modules/checkboxFormSlice";
import {
  actions as inputTextFormActions,
  inputTextFormAdapter,
} from "../forms/InputTextForm/modules/inputTextFormSlice";
import { AppDispatch, RootState } from "../store";
import { actions as formActions } from "./modules/formSlice";

import { createFormId } from "../createFormId";
import { FormName } from "./modules/types";
import { assert } from "../assert";

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

  const inputTextFormEntities = useSelector((state: RootState) =>
    inputTextFormAdapter.getSelectors().selectEntities(state.inputTextForm)
  );

  const checkboxFormEntities = useSelector((state: RootState) =>
    checkboxFormAdapter.getSelectors().selectEntities(state.checkboxForm)
  );

  const formValues = formSchemas.map(({ formId, formName }) => {
    switch (formName) {
      case "text": {
        const entity = inputTextFormEntities[formId];
        assert(entity);
        const { inputValue } = entity;
        return {
          formId,
          inputValue,
        };
      }
      case "checkbox": {
        const entity = checkboxFormEntities[formId];
        assert(entity);
        const { checked1, checked2, checked3 } = entity;
        return {
          formId,
          checked1,
          checked2,
          checked3,
        };
      }
      default: {
        throw new Error();
      }
    }
  });

  return {
    formSchemas,
    selectedFormName,
    selectFormName,
    addForm,
    formValues,
  };
};
