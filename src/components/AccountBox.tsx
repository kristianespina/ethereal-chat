import React, { useState } from "react";

import { Flex } from "@chakra-ui/layout";
import RegisterBox from "./RegisterBox";
import LoginBox from "./LoginBox";

const AccountBox = () => {
  const [isViewRegister, setIsViewRegister] = useState(false);
  const toggleRegister = () => {
    setIsViewRegister(!isViewRegister);
  };
  return (
    <Flex direction="column" gridGap={4} justifyContent="center" height="100%">
      {!isViewRegister && <LoginBox toggle={toggleRegister} />}
      {isViewRegister && <RegisterBox />}
    </Flex>
  );
};

export default AccountBox;
