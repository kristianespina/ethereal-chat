import React, { useRef, useState, useEffect, useCallback } from "react";
import io, { Socket } from "socket.io-client";
import { Flex, Box } from "@chakra-ui/react";

import ChatEntry from "./ChatEntry";
import InputMessage from "./InputMessage";

type Entry = {
  sender: string;
  message: string;
};
type Message = {
  sender?: string;
  destination: string;
  payload: Payload;
};
type Payload = {
  type: string;
  content: string;
};

const ChatBox = () => {
  const [chat, setChat] = useState<Entry[]>([]);
  const socket = useRef<Socket>();

  const addMessage = useCallback(
    (message) => {
      setChat([...chat, message]);
    },
    [chat]
  );
  useEffect(() => {
    socket.current = io("ws://localhost:4000");
    socket.current.auth = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZWxlc3BpbmFAZ21haWwuY29tIiwibGV2ZWwiOjAsImlhdCI6MTYyNzk5NjU4NiwiZXhwIjoxNjI4MDI1Mzg2fQ.r9eeg-ApIyhZgpT5wJReL87ZVSwQGxtCG9nulot7ut0",
    };
    socket.current.on(
      "message",
      ({ sender, destination, payload }: Message) => {
        addMessage({ sender, payload });
        console.log({ sender, destination, payload });
      }
    );

    setTimeout(() => {
      const _message: Message = {
        destination: "onelespina@gmail.com",
        payload: { type: "chat", content: "Hello World" },
      };
      socket.current?.send(_message);
    }, 150);
    return () => {
      socket.current?.disconnect();
    };
  }, []);

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
