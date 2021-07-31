import React from "react";
import { Flex } from "@chakra-ui/react";

import Sidebar from "../../components/Sidebar";
import ChatBox from "../../components/ChatBox";

const Messages = () => {
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
