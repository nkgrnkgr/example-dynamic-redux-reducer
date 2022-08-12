import { Input } from "@chakra-ui/react";
import { useState } from "react";

export const InputText: React.FC = () => {
  const [value, setValue] = useState();
  return (
    <Input
      placeholder="input text..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
