import React from "react";

import Profile from "./Profile";
import Conversations from "./Conversations";

const SidebarContent = () => {
  return (
    <>
      <Profile name="Kristian Espina" status="Active Now" />
      <Conversations />
    </>
  );
};

export default SidebarContent;
