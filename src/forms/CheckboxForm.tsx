import { Checkbox, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from "../Card";

type Props = {
  formId: number;
};

export const CheckboxForm: React.FC<Props> = ({ formId }) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

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
          setChecked1(!checked1);
        }}
        defaultChecked={checked1}
      >
        Checkbox 1
      </Checkbox>
      <Checkbox
        onClick={() => {
          setChecked2(!checked2);
        }}
        defaultChecked={checked2}
      >
        Checkbox 2
      </Checkbox>
      <Checkbox
        onClick={() => {
          setChecked1(!checked3);
        }}
        defaultChecked={checked3}
      >
        Checkbox 3
      </Checkbox>
    </Card>
  );
};
