import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";
import Button from "./Button";

function FriendCard(props) {
  var friendCard = {
    backgroundColor: 'darksalmon',
    margin: '10px'
  }
  return (
    <div id="friendCard" style={friendCard}>
      <p>I am your friend.</p>
      <ProfilePic url={props.url}/>
      <ProfileName name={props.name}/>
      <Button text={props.text}
              buttonUrl={props.buttonUrl}/>
    </div>
  );
}

export default FriendCard
