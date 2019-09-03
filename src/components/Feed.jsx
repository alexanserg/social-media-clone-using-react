import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

var feed = [
  {
    name: "Tim",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue."
  },
  {
    name: "Lenny",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue."
  },
  {
    name: "Clem",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue."
  },
  {
    name: "Ringo",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue."
  },
  {
    name: "Cletus",
    url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
    body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue."
  }
];

function Feed() {
  return (
    <div>
    <h3>What's happening?</h3>
     {feed.map((card, index) =>

       <Card name={card.name}
         url={card.url}
         body={card.body}
         key={index}/>
     )}
    </div>
  );
}


export default Feed
