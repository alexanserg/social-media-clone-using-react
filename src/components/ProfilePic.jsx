import React from "react";
import PropTypes from "prop-types";

function ProfilePic(props) {
  return (
    <div>
      <img src={props.url} alt="profile picture" />
    </div>
  );
}


ProfilePic.propTypes = {
  url: PropTypes.string
};

export default ProfilePic;
