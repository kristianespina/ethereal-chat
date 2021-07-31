import React from "react";
import "./App.css";

import { Flex } from "@chakra-ui/layout";

import Message from "./pages/Message";

function App() {
  return (
    <Flex>
      <Message />
    </Flex>
  );
}

export default App;
