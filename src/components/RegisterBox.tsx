import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Flex } from "@chakra-ui/layout";
import { Input, Text, Button, FormControl, useToast } from "@chakra-ui/react";

import { postRegister } from "../api/user";
import { useAppDispatch } from "../app/hooks";
import { updateUser } from "../features/user/userSlice";

const RegisterBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const history = useHistory();
  const toast = useToast();
  const dispatch = useAppDispatch();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);
  const handleDisplayName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDisplayName(e.target.value);

  const handleRegister = async () => {
    // validate inputs
    if (password !== confirmPassword) {
      return toast({
        title: "Ooops",
        description: "Passwords do not match",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    try {
      const response = await postRegister(email, password, displayName);
      if (response.status === 200) {
        const { user, token } = response.data;
        dispatch(
          updateUser({
            email: user.email,
            level: user.level,
            token: token,
          })
        );
        toast({
          title: "Success",
          description: "Account created",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        history.push("/");
      }
    } catch ({ response }) {
      const message = response.data;
      toast({
        title: "Registration Failed",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Flex direction="column" gridGap={4} justifyContent="center" height="100%">
      <FormControl>
        <Text fontWeight="bold" fontSize="2xl">
          Create an account
        </Text>
        <Input
          name="email"
          size="lg"
          variant="filled"
          placeholder="Email address"
          mt={4}
          onChange={handleEmail}
        />
        <Input
          name="displayName"
          size="lg"
          variant="filled"
          placeholder="Display Name"
          mt={4}
          onChange={handleDisplayName}
        />
        <Input
          name="password"
          size="lg"
          variant="filled"
          placeholder="Password"
          type="password"
          mt={4}
          onChange={handlePassword}
        />
        <Input
          name="confirmPassword"
          size="lg"
          variant="filled"
          placeholder="Confirm Password"
          type="password"
          mt={4}
          onChange={handleConfirmPassword}
        />
        <Button
          colorScheme="blue"
          size="md"
          mt={9}
          borderRadius={99}
          w="full"
          type="submit"
          onSubmit={handleRegister}
          onClick={handleRegister}
        >
          Register
        </Button>
      </FormControl>
    </Flex>
  );
};

export default RegisterBox;
