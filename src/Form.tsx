import { Box, Heading } from "@chakra-ui/react";
import { InputText } from "./forms/InputText";

type Props = {
  formId: string;
};

export const Form: React.FC<Props> = ({ formId }) => {
  return (
    <Box>
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
    </Box>
  );
};
