import React, { Component } from 'react';
import { Breadcrumb } from 'antd'

class Home extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Home;