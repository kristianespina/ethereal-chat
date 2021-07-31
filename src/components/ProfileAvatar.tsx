import React from "react";
import { Avatar } from "@chakra-ui/react";

type Props = {
  name: string;
  src: string;
  size: string;
};

const ProfileAvatar = ({ name, src, size }: Props) => {
  return <Avatar name={name} src={src} size={size} />;
};

export default React.memo(ProfileAvatar);
