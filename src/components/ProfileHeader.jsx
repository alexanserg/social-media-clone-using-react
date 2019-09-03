import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";
import Button from "./Button";



function ProfileHeader(props) {
  return (
    <div id="profile">
      <ProfilePic url={props.url}/>
      <ProfileName name={props.name}/>
      <Button text={props.text}
      buttonUrl={props.buttonUrl}/>
    </div>
  );
}

export default ProfileHeader
