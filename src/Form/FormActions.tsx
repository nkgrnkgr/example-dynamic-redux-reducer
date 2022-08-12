import { Box, Button, Code, Container } from "@chakra-ui/react";

const json = {
  a: "hoge",
  b: "fuga",
};

export const FormActions: React.FC = () => {
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
        <Code>{JSON.stringify(json, null, 2)}</Code>
      </Box>
    </>
  );
};
