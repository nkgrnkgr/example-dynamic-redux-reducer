import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { actions } from "./modules/formSlice";
import { FormName } from "./modules/types";

export const useFormState = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { formSchemas, selectedFormName } = useSelector<
    RootState,
    RootState["form"]
  >((state) => state.form);

  const addForm = () => {
    dispatch(actions.addForm());
  };

  const selectFormName = (formName: FormName) =>
    dispatch(actions.selectFormName(formName));

  return {
    formSchemas,
    selectedFormName,
    selectFormName,
    addForm,
  };
};
