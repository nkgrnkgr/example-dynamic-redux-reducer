import { useDispatch, useSelector } from "react-redux";
import { assert } from "../../assert";
import { AppDispatch, RootState } from "../../store";
import { actions, inputTextFormAdapter } from "./modules/inputTextFormSlice";

export const useInputTextFormState = (formId: number) => {
  const { selectById } = inputTextFormAdapter.getSelectors();
  const entity = useSelector((state: RootState) =>
    selectById(state.inputTextForm, formId)
  );
  assert(entity);

  const dispatch = useDispatch<AppDispatch>();

  const changeValue = (newInputValue: string) => {
    dispatch(
      actions.update({
        id: formId,
        changes: {
          inputValue: newInputValue,
        },
      })
    );
  };

  return {
    inputValue: entity.inputValue,
    changeValue,
  };
};
