import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";

import ChatEntry from "./ChatEntry";
import InputMessage from "./InputMessage";

import { Message } from "../types/chat";

import { addMessage } from "../features/chat/chatSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const ChatBox = () => {
  const dispatch = useAppDispatch();
  const { socket } = useAppSelector((state) => state.connection);
  const { onlineUsers, messages } = useAppSelector((state) => state.chat);

  useEffect(() => {
    console.log("Received", messages);
    console.log(onlineUsers);
    // eslint-disable-next-line
  }, [messages]);

  useEffect(() => {
    // On Message Listener
    socket?.on("message", ({ sender, destination, payload }: Message) => {
      dispatch(addMessage({ sender, destination, payload }));
      console.log({ sender, destination, payload });
    });
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
            {messages?.map(({ sender, payload }, index) => (
              <ChatEntry
                key={index}
                sender={
                  onlineUsers?.find((user) => user.email === sender)
                    ?.displayName
                }
                message={payload.content}
              />
            ))}
          </Flex>
          <InputMessage />
        </Flex>
      </Flex>
    </Box>
  );
};

export default React.memo(ChatBox);
