import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <a className={props.text} href={props.buttonUrl}>{props.text}</a>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  buttonUrl: PropTypes.string

};

export default Button
