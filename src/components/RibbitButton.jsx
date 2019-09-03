import React from "react";
import PropTypes from "prop-types";

function RibbitButton (props) {
  return (
    <div>
      <button href={props.ribbitUrl}>{props.ribbitText}</button>
    </div>
  );
}

RibbitButton.propTypes = {
  ribbitUrl: PropTypes.string,
  ribbitText: PropTypes.string
}

export default RibbitButton;
