import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import ChatEntry from "./ChatEntry";
import InputMessage from "./InputMessage";

const ChatBox = () => {
  return (
    <Box w="full" h="100vh" p={[0, 0, 4, 4]}>
      {/* container */}
      <Flex bgColor="gray.100" direction="column" h="100%" px={8} py={4}>
        {/* section */}
        <Flex direction="column" minH={0} flexGrow={1}>
          {/* scrollable content */}
          <Flex
            id="messages"
            flexDirection="column"
            overflow="scroll"
            minH={0}
            flex={1}
            flexGrow={1}
            mb={4}
          >
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry
              sender="John Doe"
              message="Hello WorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorld"
            />
            <ChatEntry
              sender="Hollegrehen"
              message="Hello WorldWorldWorldWorldWorld"
            />
          </Flex>
          <InputMessage />
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(ChatBox);
