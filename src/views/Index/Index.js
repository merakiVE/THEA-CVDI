//Dependencies
import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Button from 'antd/lib/button';
import {Layout, Row, Col} from 'antd';
import Login from '../Login/Login';
import Register from '../Register/Register';
//NProgress

//Ant Disign
import { Breadcrumb, Badge} from 'antd';

const {Header, Content, Footer} = Layout;

// Ant Disign

class Index extends Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
        }
    }

    render() {
        return (
            <div className="">
                <Layout style={{minHeight: '100vh'}}>
                    <Layout>
                        <Header style={{background: '#665199', padding: 0}}>
                            <Row type="flex" justify="end" align="middle">
                                <Col span={17}>
                                    <Link to="/">
                                        <Button type="primary" icon="home">Home!</Button>
                                    </Link>
                                </Col>
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
                                <Switch>
                                    <Route path='/login' name="Login" component={Login}/>
                                    <Route path='/register' name="Register" component={Register}/>
                                </Switch>
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
