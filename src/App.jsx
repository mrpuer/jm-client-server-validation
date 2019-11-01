import React from 'react';
import { Layout, Row } from 'antd';
import Register from './Register';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <Row type="flex" justify="center">
            <h1>New User Register</h1>
          </Row>
          <Row type="flex" justify="center">
            <Register />
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
