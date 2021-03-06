import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        login: "pjhyett",
        id: 3,
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
      {
        login: "wycats",
        id: 4,
        avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
        tml_url: "https://github.com/wycats",
      },
    ],
  };

  render() {
    const { id, login, avatar_url, html_url } = this.state;
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItem key={id} avatar={avatar_url} url={html_url} name={login} />
        ))}
      </div>
    );
  }
}

export default Users;
