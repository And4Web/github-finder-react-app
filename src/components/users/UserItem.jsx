import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { avatar, name, url } = this.props;

    return (
      <div className="container">
        <img className="card img " src={avatar} />
        <h3 className="title">{name}</h3>
      </div>
    );
  }
}

export default UserItem;
