import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Select,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "./Form";
import { FormActions } from "./FormActions";

export type FormName = "text" | "checkbox";

type FormSchema = {
  formId: number;
  formName: FormName;
};

export const App: React.FC = () => {
  const [formSchemas, setFormSchemas] = useState<FormSchema[]>([
    {
      formId: 1,
      formName: "text",
    },
  ]);
  const [selectedValue, setSelectedValue] = useState<FormName>("checkbox");

  const add = () => {
    const { formId } = formSchemas.sort((a, b) => a.formId - b.formId)[
      formSchemas.length - 1
    ];
    setFormSchemas([
      ...formSchemas,
      {
        formId: formId + 1,
        formName: selectedValue,
      },
    ]);
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

      <Divider
        sx={{
          mt: "48px",
          mb: "48px",
        }}
      />

      <Box
        sx={{
          mb: "12px",
        }}
      >
        <Flex>
          <Select
            defaultValue={selectedValue}
            onChange={(e) =>
              setSelectedValue(e.currentTarget.value as FormName)
            }
          >
            <option value="text">text</option>
            <option value="checkbox">checkbox</option>
          </Select>
          <Button colorScheme="cyan" onClick={add}>
            Add Form
          </Button>
        </Flex>
      </Box>

      <Box
        sx={{
          mb: "12px",
        }}
      >
        <Wrap spacing="12px">
          {formSchemas.map(({ formId, formName }) => (
            <WrapItem w="240px" key={formId}>
              <Form formId={formId} formName={formName} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
};
