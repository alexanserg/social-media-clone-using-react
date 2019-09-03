import React from "react";
import Profile from "./Profile";
import Feed from "./Feed";
import Connections from "./Connections";

function Content() {
  return (
    <div>
      <Profile />
      <Feed />
      <Connections />
    </div>
  );
}

export default Content;
