import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  message: string;
  isSenderSelf: boolean;
};
const ChatEntryMessage = ({ message, isSenderSelf }: Props) => {
  const bgColor = isSenderSelf ? "blue.500" : "white";

  return (
    <Box
      bgColor={bgColor}
      p={3}
      maxW={[64, 64, 96, 96]}
      _hover={{ cursor: "pointer", boxShadow: "md" }}
    >
      {message}
    </Box>
  );
};

export default React.memo(ChatEntryMessage);
