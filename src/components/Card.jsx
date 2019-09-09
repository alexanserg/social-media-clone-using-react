import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";
import MessageBody from "./MessageBody";
import Likes from "./Likes";

function Card(props) {
  var card = {
    backgroundColor: '#adfadfaf',
    margin: '10px'
  }
  return (
    <div id="card" style={card}>
      <ProfileName name={props.name}/>
      <ProfilePic url={props.url}/>
      <MessageBody body={props.body}/>
      <Likes />
    </div>
  );
}

export default Card
