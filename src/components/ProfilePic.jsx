import React from "react";
import PropTypes from "prop-types";

function ProfilePic(props) {
  var profilePic = {
    height: props.height || '75px'
  }
  return (
    <div>
      <img style={profilePic} src={props.url} alt="profile picture" />
    </div>
  );
}

ProfilePic.propTypes = {
  url: PropTypes.string
};

export default ProfilePic;
