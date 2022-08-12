import {
  Box,
  Button,
  Container,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "./Form";
import { FormActions } from "./FormActions";

export const App: React.FC = () => {
  const [formIds, setFormIds] = useState([1]);

  const increment = () => {
    const maxId = formIds.sort((a, b) => a - b)[formIds.length - 1];
    setFormIds([...formIds, maxId + 1]);
  };

  return (
    <Container>
      <Box
        sx={{
          mb: "12px",
        }}
      >
        <Heading as="h2" size="lg">
          Forms
        </Heading>
      </Box>
      <Box
        sx={{
          mb: "12px",
        }}
      >
        <FormActions />
      </Box>

      <Box
        sx={{
          mb: "12px",
        }}
      >
        <Wrap spacing="12px">
          {formIds.map((formId) => (
            <WrapItem w="240px" key={formId}>
              <Form formId={`${formId}`} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box
        sx={{
          mb: "12px",
        }}
      >
        <Button colorScheme="cyan" onClick={increment}>
          Add Form
        </Button>
      </Box>
    </Container>
  );
};
