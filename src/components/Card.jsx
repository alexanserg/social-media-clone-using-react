import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";
import MessageBody from "./MessageBody";

function Card(props) {
  var card = {
    backgroundColor: '#adfadfaf',
    margin: '10px'
  }
  return (
    <div id="card" style={card}>
      <p>Hi!</p>
      <ProfilePic url={props.url}/>
      <ProfileName name={props.name}/>
      <MessageBody body={props.body}/>
    </div>
  );
}

export default Card
