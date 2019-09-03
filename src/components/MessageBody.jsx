import React from "react";
import PropTypes from "prop-types";

function MessageBody(props) {
  return (
    <div>
      <p className="body">{props.body}</p>
    </div>
  );
}

MessageBody.propTypes = {
  body: PropTypes.string
};

export default MessageBody
