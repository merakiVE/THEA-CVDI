//Dependencies
import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';

//Components
import Login from '../../components/Home/Login.js';
import Register from '../../components/Home/Register.js';
import HomeContent from '../../components/Home/HomeContent.js';

//Ant Disign
import {Layout, Row, Col, Icon} from 'antd';
import Button from 'antd/lib/button';
import {Breadcrumb, Badge} from 'antd';

const {Header, Content, Footer} = Layout;

// Ant Disign

class Home extends Component {
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
                        <Header style={{background: '#146AE2', padding: 0}}>
                            <Row type="flex" justify="end" align="middle">
                                <Col span={17}>
                                    <Link to="/">
                                        <Button className="btn-home" type="dashed" size="large" icon="home">Home!</Button>
                                    </Link>
                                </Col>
                                <Col span={3}>
                                    <Badge className="header-icon">
                                        <Link to="/login">
                                            <Button className="btn-singIn" type="dashed" size="large" icon="login">Sing In!</Button>
                                        </Link>
                                    </Badge>
                                </Col>
                                <Col span={3}>
                                    <Link to="/register">
                                        <Button className="btn-registerNow" type="dashed" size="large" icon="user-add">Register Now!</Button>
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
                                    <Route path='/' name="Index" component={HomeContent}/>
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
            </div>
        );
    }
}


export default Home;
