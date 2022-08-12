import { Heading } from "@chakra-ui/react";
import { Card } from "./Card";
import { InputText } from "./forms/InputText";

type Props = {
  formId: string;
};

export const Form: React.FC<Props> = ({ formId }) => {
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
      <InputText />
    </Card>
  );
};
