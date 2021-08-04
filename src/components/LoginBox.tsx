import React, { useState, useEffect } from "react";
import { Flex, Center } from "@chakra-ui/layout";
import {
  Input,
  Text,
  Button,
  FormControl,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { updateUser } from "../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { postLogin } from "../api/user";

type Props = {
  toggle: Function;
};

const LoginBox = ({ toggle }: Props) => {
  const { handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const toast = useToast();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await postLogin(email, password);
      // Update User State
      if (response.status === 200) {
        const { user, token } = response.data;
        dispatch(
          updateUser({
            email: user.email,
            displayName: user.displayName,
            level: user.level,
            token: token,
          })
        );
        toast({
          title: "Success",
          description: "You have successfully logged in.",
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
        title: "Login Failed",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Flex direction="column" gridGap={4} justifyContent="center" height="100%">
      <form onSubmit={handleSubmit(handleLogin)}>
        <Text fontWeight="bold" fontSize="2xl">
          Login to continue
        </Text>
        <Input
          size="lg"
          variant="filled"
          placeholder="Email address"
          mt={4}
          onChange={handleEmailChange}
        />
        <Input
          size="lg"
          variant="filled"
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          mt={4}
        />
        <Button
          colorScheme="blue"
          size="md"
          mt={9}
          borderRadius={99}
          w="full"
          type="submit"
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
      </form>
    </Flex>
  );
};

export default LoginBox;
