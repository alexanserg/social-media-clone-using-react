import React from "react";
import ProfileBody from "./ProfileBody"
import ProfileHeader from "./ProfileHeader"

var profileHeader = {
  url: "https://www.indiewire.com/wp-content/uploads/2018/07/pennywise-bill-skarsgard-it-movie.jpg",
  name: "Pennywise",
  text: "Read Stephen king",
  buttonUrl: "/"
}
var profileBody = {
  profileBody: "In the novel, It is a monster that can shapeshift and change forms. Pennywise the Clown is It's most used form. After arriving on Earth, It would sleep for approximately 27 to 30 years at a time, then awaken to wreak chaos and feed. "
}

function Profile(props) {
  return(
    <div>
      <ProfileHeader url={profileHeader.url}
          name={profileHeader.name}
          text={profileHeader.text}
          buttonUrl={profileHeader.buttonUrl} />
    <div>
      <ProfileBody  profileBody={profileBody.profileBody} />
    </div>
    </div>
  )
}

export default Profile
