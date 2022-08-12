import { useSelector } from "react-redux";
import { assert } from "../../assert";
import { RootState } from "../../store";
import { CheckboxForm, checkboxFormAdapter } from "./modules/checkboxFormSlice";

export const useCheckboxForm = (formId: number): CheckboxForm => {
  const { selectById } = checkboxFormAdapter.getSelectors();
  const entity = useSelector((state: RootState) =>
    selectById(state.checkboxForm, formId)
  );
  assert(entity);
  return entity;
};
