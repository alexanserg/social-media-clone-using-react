import React from "react";
import PropTypes from "prop-types";
import FriendCard from "./FriendCard";

var connections = [
  {
    name: "Jim",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    button: "Stab",
    buttonUrl: "/"
  },
  {
    name: "Benny",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    button: "Stab",
    buttonUrl: "/"
  },
  {
    name: "Phlem",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    button: "Stab",
    buttonUrl: "/"
  },
  {
    name: "Ringo",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    button: "Stab",
    buttonUrl: "/"
  },
  {
    name: "Cletus",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    button: "Stab",
    buttonUrl: "/"
  }
];

function Connections(props) {
  return (
    <div>
    <h3>I want to be your friend!</h3>
     {connections.map((card, index) =>

       <FriendCard name={card.name}
         url={card.url}
         text={card.button}
         buttonUrl={card.buttonUrl}
         key={index}/>
     )}
    </div>
  );
}


export default Connections
