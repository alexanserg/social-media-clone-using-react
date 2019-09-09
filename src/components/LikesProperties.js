import React from "react";

var myButton = {
  fontSize: '20px',
  borderRadius: '15x'
}

class LikesProperties extends React.Component {

  constructor(props) {
    super(props);

  };

  render() {
    return <button style={myButton} onClick={this.props.triggerParentUpdate}>Like</button>
  }
}

export default LikesProperties;
