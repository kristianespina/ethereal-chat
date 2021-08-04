import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ChatList from "./ChatList";

const Conversations = () => {
  return (
    <Box pt={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} mt={8}>
        Online Users
      </Text>
      <ChatList />
    </Box>
  );
};

export default React.memo(Conversations);
