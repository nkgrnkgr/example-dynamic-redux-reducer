import { Code } from "@chakra-ui/react";
import { useFormState } from "./useFormState";

export const FormActions: React.FC = () => {
  const { formValues } = useFormState();

  return (
    <pre
      style={{
        width: "100%",
      }}
    >
      <Code
        sx={{
          width: "100%",
        }}
      >
        {JSON.stringify(formValues, null, 2)}
      </Code>
    </pre>
  );
};
