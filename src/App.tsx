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
import { FormActions } from "./Form/FormActions";

export type FormName = "text" | "checkbox";

export const App: React.FC = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};
