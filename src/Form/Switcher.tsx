import { FormName } from "../App";
import { CheckboxForm } from "../forms/CheckboxForm";
import { InputTextForm } from "../forms/InputTextForm";

type Props = {
  formId: number;
  formName: FormName;
};

export const Switcher: React.FC<Props> = ({ formId, formName }) => {
  switch (formName) {
    case "text":
      return <InputTextForm formId={formId} />;
    case "checkbox":
      return <CheckboxForm formId={formId} />;
    default:
      return null;
  }
};
