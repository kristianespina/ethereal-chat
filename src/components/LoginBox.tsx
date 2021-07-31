import React, { useState } from "react";

import { Flex, Center } from "@chakra-ui/layout";
import { Input, Text, Button, FormControl, Divider } from "@chakra-ui/react";
type Props = {
  toggle: Function;
};
const LoginBox = ({ toggle }: Props) => {
  const handleLogin = () => {};
  return (
    <Flex direction="column" gridGap={4} justifyContent="center" height="100%">
      <FormControl>
        <Text fontWeight="bold" fontSize="2xl">
          Login to continue
        </Text>
        <Input size="lg" variant="filled" placeholder="Email address" mt={4} />
        <Input
          size="lg"
          variant="filled"
          placeholder="Password"
          type="password"
          mt={4}
        />
        <Button
          colorScheme="blue"
          size="md"
          mt={9}
          borderRadius={99}
          w="full"
          onSubmit={handleLogin}
        >
          Login
        </Button>

        <Divider mt={4} />
        <Center>
          <Button
            colorScheme="blue"
            variant="link"
            mt={4}
            onClick={() => toggle()}
          >
            Create an account
          </Button>
        </Center>
      </FormControl>
    </Flex>
  );
};

export default LoginBox;
