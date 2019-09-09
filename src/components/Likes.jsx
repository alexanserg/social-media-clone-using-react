import React from "react";
import LikesProperties from './LikesProperties'

class Likes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0
    };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({likesCount: this.state.likesCount + 1});
    console.log(this.state.likesCount + " " + "Bens added");
  }

  render() {
    return (
      <div className="Likes">
      <p>Likes: {this.state.likesCount}</p>
      <LikesProperties triggerParentUpdate={this.handleLike} />
      </div>
    );
  }
}

export default Likes;
