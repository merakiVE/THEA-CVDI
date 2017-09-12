import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import './Home.css';


import {Popover, Button, Layout, Menu, Breadcrumb, Icon, Row, Col, Badge, Dropdown, Avatar } from 'antd';

const {Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

const content = (
    <div>
        <a href="#"><p>Notification 1</p></a>
        <a href="#"><p>Notification 2</p></a>
        <a href="#"><p>Notification 3</p></a>
    </div>
);

class Home extends Component {
    constructor (){
        super ();
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }


    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/">
                        Setting
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    Change Theme
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">
                        Sing Up!
                    </Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="1">
                            <Icon type="layout"/>
                            <span>Mis tramites</span>
                        </Menu.Item>

                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Historial</span>
                        </Menu.Item>

                        <Menu.Item key="9">
                            <Icon type="setting"/>
                            <span>Ajustes</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Row type="flex" justify="end" align="middle">
                            <Col span={16}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Col>

                            <Col span={2}>
                                <Badge className="header-icon" count={8}>
                                    <Link to="/">
                                        <Icon type="mail"/>
                                    </Link>
                                </Badge>
                            </Col>
                            <Col span={3}>
                                <Popover content={content} title="Notification" trigger="click">
                                    <Badge className="header-icon" dot>
                                        <a href="#">
                                            <Icon type="notification" />
                                        </a>
                                    </Badge>
                                </Popover>
                            </Col>
                            <Col span={2}>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" title="UserNAme">
                                        <Avatar style={{ verticalAlign: 'middle'}}>UserNAme</Avatar> <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>

                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '12px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>

                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}


export default Home;
