import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ChatList from "./ChatList";

import { useAppSelector, useAppDispatch } from "../app/hooks";

import { updateOnlineUsers } from "../features/chat/chatSlice";

const Conversations = () => {
  const dispatch = useAppDispatch();
  const { socket } = useAppSelector((state) => state.connection);

  useEffect(() => {
    // Get Online Users
    socket?.on("onlineUsers", (onlineUsers) => {
      dispatch(updateOnlineUsers(onlineUsers));
    });
  }, [socket, dispatch]);

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
