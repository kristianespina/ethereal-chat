import React, { useState, useEffect, useCallback } from "react";
import { Flex, Box } from "@chakra-ui/react";

import ChatEntry from "./ChatEntry";
import InputMessage from "./InputMessage";

import { Entry, Message } from "../types/chat";

import { useAppSelector } from "../app/hooks";

const ChatBox = () => {
  const [chat, setChat] = useState<Entry[]>([]);
  const { socket } = useAppSelector((state) => state.connection);

  const addMessage = useCallback(
    (message) => {
      setChat([...chat, message]);
    },
    [chat]
  );
  useEffect(() => {
    // On Message Listener
    socket?.on("message", ({ sender, destination, payload }: Message) => {
      addMessage({ sender, payload });
      console.log({ sender, destination, payload });
    });

    setTimeout(() => {
      const _message: Message = {
        destination: "onelespina@gmail.com",
        payload: { type: "chat", content: "Hello World" },
      };
      socket?.send(_message);
    }, 3000);
    // eslint-disable-next-line
  }, [socket]);

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
            <ChatEntry
              sender="Kristian Espina"
              message="Hello World"
              isSenderSelf={true}
            />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry
              sender="Kristian Espina"
              message="Hello World"
              isSenderSelf={true}
            />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry sender="Kristian Espina" message="Hello World" />
            <ChatEntry
              sender="Kristian Espina"
              message="Hello World"
              isSenderSelf={true}
            />
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
