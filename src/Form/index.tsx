import {
  Box,
  Button,
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
      <Flex>
        <Box
          sx={{
            flex: 1,
            mr: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              mb: "12px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                mr: "12px",
              }}
            >
              <Select
                defaultValue={selectedFormName}
                onChange={(e) =>
                  selectFormName(e.currentTarget.value as FormName)
                }
              >
                <option value="text">text</option>
                <option value="checkbox">checkbox</option>
              </Select>
            </Box>
            <Button colorScheme="cyan" onClick={addForm}>
              Add Form
            </Button>
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
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <FormActions />
        </Box>
      </Flex>
    </>
  );
};
