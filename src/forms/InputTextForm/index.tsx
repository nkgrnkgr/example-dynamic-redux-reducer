import { Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from "../../ui/Card";
type Props = {
  formId: number;
};

export const InputTextForm: React.FC<Props> = ({ formId }) => {
  const [value, setValue] = useState("");
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Card>
  );
};
