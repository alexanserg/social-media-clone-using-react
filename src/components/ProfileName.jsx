import React from "react";
import PropTypes from "prop-types";

function ProfileName(props) {
  return (
    <div>
      <p className="name">{props.name}</p>
    </div>
  );
}

ProfileName.propTypes = {
  name: PropTypes.string
};
export default ProfileName
