import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Select,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FormActions } from "./FormActions";
import { FormSwitcher } from "./FormSwitcher";
import { FormName } from "./modules/types";
import { useFormState } from "./useFormState";

export const Form: React.FC = () => {
  const { addForm, selectFormName, selectedFormName, formSchemas } =
    useFormState();

  return (
    <>
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
            defaultValue={selectedFormName}
            onChange={(e) => selectFormName(e.currentTarget.value as FormName)}
          >
            <option value="text">text</option>
            <option value="checkbox">checkbox</option>
          </Select>
          <Button colorScheme="cyan" onClick={addForm}>
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
              <FormSwitcher formId={formId} formName={formName} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
};
