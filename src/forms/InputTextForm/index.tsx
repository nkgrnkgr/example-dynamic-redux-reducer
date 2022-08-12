import { Heading, Input } from "@chakra-ui/react";
import { Card } from "../../ui/Card";
import { useInputTextFormState } from "./useInputTextFormState";
type Props = {
  formId: number;
};

export const InputTextForm: React.FC<Props> = ({ formId }) => {
  const { inputValue, changeValue } = useInputTextFormState(formId);

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
      <Input
        placeholder="input text..."
        value={inputValue}
        onChange={(e) => changeValue(e.target.value)}
      />
    </Card>
  );
};
