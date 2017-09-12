//Dependencies
import React, { Component } from 'react';
import { Link , NavLink, Switch, Route, Redirect} from 'react-router-dom';
import './Home.css';

//Components
import NewProcedure from '../../components/Procedures/NewProcedure';
import Processed from '../../components/Procedures/Processed';
import Record from '../../components/Procedures/Record';
import Dashboard from '../../components/Dashboard/Dashboard';

//NProgress
import NProgress from 'nprogress'

//Ant Disign
import { Popover, Layout, Menu, Breadcrumb, Icon, Row, Col, Badge, Dropdown, Avatar } from 'antd';

const { Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

const content = (
    <div>
        <a href="/"><p>Notification 1</p></a>
        <a href="/"><p>Notification 2</p></a>
        <a href="/"><p>Notification 3</p></a>
    </div>
);

class Home extends Component {
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

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleTouchItems}>
                        <Menu.Item key="1">
                            <NavLink to={'/home'} className="nav-link" activeClassName="active">
                                <Icon type="home" />
                                <span>Dashboad</span>
                            </NavLink>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span><Icon type="layout"/><span>Procedures</span></span>}>
                            <Menu.Item key="2">
                                <NavLink to={'/home/procedures/new'} className="nav-link" activeClassName="active">
                                    <Icon type="edit" />
                                    New
                                </NavLink>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <NavLink to={'/home/procedures/processed'} className="nav-link" activeClassName="active">
                                    <Icon type="check-square-o" />
                                    Processed
                                </NavLink>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <NavLink to={'/home/procedures/record'} className="nav-link" activeClassName="active">
                                      <Icon type="bar-chart" />
                                      <span>Record</span>
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>

                        <Menu.Item key="5">
                            <NavLink to={'/historial'} className="nav-link" activeClassName="active">
                                <Icon type="layout" />
                                <span>Historial</span>
                            </NavLink>
                        </Menu.Item>


                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Row type="flex" justify="end" align="middle">
                            <Col span={18}>
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
                            <Col span={2}>
                                <Popover content={content} title="Notification" trigger="click">
                                    <Badge className="header-icon" dot>
                                        <a href="/">
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
                            <Switch>
                                <Route path='/home/procedures/new' name="Datos Personales" component={NewProcedure}/>
                                <Route path='/home/procedures/processed' name="Procedure Processed" component={Processed}/>
                                <Route path='/home/procedures/record' name="Record" component={Record}/>
                                <Route path='/home' name="Dashboard" component={Dashboard}/>
                                <Redirect from="/" to="/home"/>
                            </Switch> 
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
