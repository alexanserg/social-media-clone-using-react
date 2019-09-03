import React from "react";
import PropTypes from "prop-types";


function ProfileBody(props) {
  return (
    <div>
      <p>{props.profileBody}</p>
    </div>
  );
}

ProfileBody.proptypes = {
  profileBody: PropTypes.string
}

export default ProfileBody
