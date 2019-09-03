import React from "react";
import NavButtons from "./NavButtons";
import SearchBar from "./SearchBar";
import RibbitButton from "./RibbitButton";

function Header (props) {
  return (
    <div className="header">
      <NavButtons />
      <SearchBar />
      <RibbitButton ribbitUrl="/" ribbitText="Ribbit" />
    </div>
  );
}

export default Header;
