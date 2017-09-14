//Dependencies
import React, { Component } from 'react';
import { Link , NavLink, Switch, Route } from 'react-router-dom';
import './Dashboard.css';

//Components
import NewProcedure from '../../components/Dashboard/NewProcedure';
import Processed from '../../components/Dashboard/Processed';
import Record from '../../components/Dashboard/Record';
import DashboardContent from '../../components/Dashboard/DashboardContent';

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

class Dashboard extends Component {
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
                        Logout!
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
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <Icon type="home" />
                                <span>Dashboad</span>
                            </NavLink>
                        </Menu.Item>

                        <SubMenu key="sub1" title={<span><Icon type="layout"/><span>Procedures</span></span>}>
                            <Menu.Item key="2">
                                <NavLink to={'/dashboard/procedures/new'} className="nav-link" activeClassName="active">
                                    <Icon type="edit" />
                                    New
                                </NavLink>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <NavLink to={'/dashboard/procedures/processed'} className="nav-link" activeClassName="active">
                                    <Icon type="check-square-o" />
                                    Processed
                                </NavLink>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <NavLink to={'/dashboard/procedures/record'} className="nav-link" activeClassName="active">
                                      <Icon type="bar-chart" />
                                      <span>Record</span>
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
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
                                <Route path='/dashboard/procedures/new' name="New Procedure" component={NewProcedure}/>
                                <Route path='/dashboard/procedures/processed' name="Processed Procedures" component={Processed}/>
                                <Route path='/dashboard/procedures/record' name="Record Procedures" component={Record}/>
                                <Route path='/dashboard' name="Dashboard" component={DashboardContent}/>
                            </Switch> 
                        </div>
                    </Content>

                    <Footer style={{textAlign: 'center'}}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <strong></strong>
                            </Col>
                            <Col span={8}>
                                <strong>Meraki: </strong> <em> "Hacer algo con el alma, con amor y creatividad,
                                dejar un
                                pedazo de si mismo en el trabajo"</em>
                            </Col>
                            <Col span={8}>
                                MerakiVE
                                <a href="https://github.com/merakiVE">
                                    <Icon type="github" style={{fontSize: 16, color: '#08c', marginLeft: '5px'}}/>
                                </a>
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}


export default Dashboard;
