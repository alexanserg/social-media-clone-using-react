import React from "react";
import Button from "./Button";

function NavButtons() {
  return (
    <div className="nav-buttons">
      < Button text="Button 1"
                buttonUrl="/"/>
      < Button text="Button 2"
                buttonUrl="/"/>
      < Button text="Button 3"
                buttonUrl="/"/>
    </div>
  );
}

export default NavButtons;
