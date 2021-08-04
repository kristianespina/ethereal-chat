import React from "react";
import { useAppSelector } from "../app/hooks";

import Profile from "./Profile";
import Conversations from "./Conversations";

const SidebarContent = () => {
  const { displayName } = useAppSelector((state) => state.user);

  return (
    <>
      <Profile name={displayName} status="Active Now" />
      <Conversations />
    </>
  );
};

export default React.memo(SidebarContent);
