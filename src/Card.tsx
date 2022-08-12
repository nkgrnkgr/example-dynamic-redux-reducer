import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0px 0px 16px -6px rgba(0,0,0,0.6)",
      }}
    >
      {children}
    </Box>
  );
};
