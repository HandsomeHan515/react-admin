import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <div>
        <Layout>
          <Header className="header" style={{ background: '#518FF0' }}>
            管理系统
          </Header>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              style={{ background: '#fff' }}
            >
              <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                <Menu.Item key="1">
                  <Link to='/'>
                    <Icon type="home" />
                    <span>首页</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/insert'>
                    <Icon type="line-chart" />
                    <span>数据导入</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="user" /><span>我的任务</span></span>}
                >
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={<span><Icon type="team" /><span>特殊人群管理</span></span>}
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ margin: 16 }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
