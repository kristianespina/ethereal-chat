import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Flex, useToast } from "@chakra-ui/react";
import io from "socket.io-client";

import Sidebar from "../../components/Sidebar";
import ChatBox from "../../components/ChatBox";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateSocket } from "../../features/connection/connectionSlice";

const Messages = () => {
  const history = useHistory();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);

  useEffect(() => {
    // Verify token
    if (!user.token) {
      toast({
        title: "Invalid Token",
        description: "Please login to continue",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      history.push("/login");
    }

    // Create socket.io connection
    const socket_url: string = process.env.REACT_APP_SOCKET_URL || "";
    const socket = io(socket_url);
    socket.auth = {
      token: user.token,
    };

    dispatch(updateSocket(socket));
    return () => {
      socket?.disconnect();
    };
  }, [dispatch, history, toast, user.token]);

  return (
    <Flex
      w="full"
      alignItems="stretch"
      flexDirection={["row", "row", "row", "row"]}
    >
      {/*Left Pane */}
      <Sidebar />
      {/*Main Pane */}
      <ChatBox />
    </Flex>
  );
};

export default Messages;
