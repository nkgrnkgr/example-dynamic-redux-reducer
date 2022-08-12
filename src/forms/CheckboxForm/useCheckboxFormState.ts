import { useDispatch, useSelector } from "react-redux";
import { assert } from "../../assert";
import { AppDispatch, RootState } from "../../store";
import { actions, checkboxFormAdapter } from "./modules/checkboxFormSlice";

export const useCheckboxFormState = (formId: number) => {
  const { selectById } = checkboxFormAdapter.getSelectors();
  const entity = useSelector((state: RootState) =>
    selectById(state.checkboxForm, formId)
  );
  assert(entity);

  const dispatch = useDispatch<AppDispatch>();

  const changeValue = (checkboxNumber: 1 | 2 | 3, value: boolean) => {
    dispatch(
      actions.update({
        id: formId,
        changes: {
          [`checked${checkboxNumber}`]: value,
        },
      })
    );
  };
  const { checked1, checked2, checked3 } = entity;

  return {
    checked1,
    checked2,
    checked3,
    changeValue,
  };
};
