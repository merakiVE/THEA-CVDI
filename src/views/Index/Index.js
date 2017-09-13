//Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'antd/lib/button';
import {Layout, Row, Col} from 'antd';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import NewProcedure from '../../components/Procedures/NewProcedure';
import Processed from '../../components/Procedures/Processed';
import Record from '../../components/Procedures/Record';
import Dashboard from '../../components/Dashboard/Dashboard';

//NProgress
import NProgress from 'nprogress'

//Ant Disign
import {Popover, Menu, Breadcrumb, Icon, Badge, Dropdown, Avatar} from 'antd';

const {Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

// Ant Disign

class Index extends Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleTouchItems = () => {
        NProgress.start()
    };


    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/">
                        Register
                    </Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="">
                <Layout style={{minHeight: '100vh'}}>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Row type="flex" justify="end" align="middle">
                                <Col span={3}>
                                    <Badge className="header-icon">
                                        <Link to="/login">
                                            <Button type="primary" icon="login">Sing In!</Button>
                                        </Link>
                                    </Badge>
                                </Col>
                                <Col span={3}>
                                    <Link to="/register">
                                        <Button type="primary" icon="user-add">Register Now!</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Header>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '12px 0'}}>
                            </Breadcrumb>

                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            </div>
                        </Content>

                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}


export default Index;
