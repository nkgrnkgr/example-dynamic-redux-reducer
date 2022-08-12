import { Box, Button, Code } from "@chakra-ui/react";
import { useFormState } from "./useFormState";

export const FormActions: React.FC = () => {
  const { formValues } = useFormState();

  const onClick = () => {
    // サーバーへの送信
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button colorScheme="red" onClick={onClick}>
          Submit
        </Button>
      </Box>
      <Box>
        <Code>{JSON.stringify(formValues, null, 2)}</Code>
      </Box>
    </>
  );
};
