import React from 'react';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: 'Register',
    };
  }

  render() {
    const { field } = this.state;
    return <div>{field}</div>;
  }
}
