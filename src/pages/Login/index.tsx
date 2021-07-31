import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import Construction from "../../assets/construction.svg";
import AccountBox from "../../components/AccountBox";
const Login = () => {
  return (
    <Flex direction="row" h="100vh">
      <Box flexGrow={1}>
        <Flex justifyContent="center" h="100vh">
          <Image src={Construction} />
        </Flex>
      </Box>
      <Box w={"500px"} p={8} h="100vh">
        <AccountBox />
      </Box>
    </Flex>
  );
};

export default Login;
