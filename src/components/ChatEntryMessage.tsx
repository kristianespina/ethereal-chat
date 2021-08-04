import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  message?: string;
  isSenderSelf?: boolean;
};
const ChatEntryMessage = ({ message, isSenderSelf }: Props) => {
  const bgColor = isSenderSelf ? "cyan.700" : "white";
  const fontColor = isSenderSelf ? "white" : "black";

  return (
    <Box
      bgColor={bgColor}
      color={fontColor}
      p={3}
      maxW={[64, 64, 96, 96]}
      borderRadius={12}
      _hover={{ cursor: "pointer", boxShadow: "md" }}
    >
      {message}
    </Box>
  );
};

export default React.memo(ChatEntryMessage);
