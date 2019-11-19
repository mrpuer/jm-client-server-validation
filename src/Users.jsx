import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getUsers = () => {
    axios.get('/users').then(resp => {
      this.setState({ users: resp.data });
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <div>
          <Button onClick={this.getUsers}>Get</Button>
        </div>
        <div>
          {users.map((user, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <ul key={id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>
                {user.skills.map(skill => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={skill.id}>{skill.value} </span>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
