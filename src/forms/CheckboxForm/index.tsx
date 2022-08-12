import { Checkbox, Heading } from "@chakra-ui/react";
import { Card } from "../../ui/Card";
import { useCheckboxFormState } from "./useCheckboxFormState";

type Props = {
  formId: number;
};

export const CheckboxForm: React.FC<Props> = ({ formId }) => {
  const { changeValue, checked1, checked2, checked3 } =
    useCheckboxFormState(formId);

  return (
    <Card>
      <Heading
        sx={{
          mb: "6px",
        }}
        as="h4"
        size="sm"
      >
        FormId: {formId}
      </Heading>
      <Checkbox
        onClick={() => {
          changeValue(1, !checked1);
        }}
        defaultChecked={checked1}
      >
        Checkbox 1
      </Checkbox>
      <Checkbox
        onClick={() => {
          changeValue(2, !checked1);
        }}
        defaultChecked={checked2}
      >
        Checkbox 2
      </Checkbox>
      <Checkbox
        onClick={() => {
          changeValue(3, !checked1);
        }}
        defaultChecked={checked3}
      >
        Checkbox 3
      </Checkbox>
    </Card>
  );
};
