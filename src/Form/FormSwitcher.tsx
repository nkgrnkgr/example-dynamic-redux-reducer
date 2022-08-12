import { CheckboxForm } from "../forms/CheckboxForm";
import { InputTextForm } from "../forms/InputTextForm";
import { FormName } from "./modules/types";

type Props = {
  formId: number;
  formName: FormName;
};

export const FormSwitcher: React.FC<Props> = ({ formId, formName }) => {
  switch (formName) {
    case "text":
      return <InputTextForm formId={formId} />;
    case "checkbox":
      return <CheckboxForm formId={formId} />;
    default:
      return null;
  }
};
