import React, {Component} from 'react';

//Ant Disign
import { Row, Col, Card} from 'antd';

import './HomeContent.css'

class HomeContent extends Component {
    render() {
        return (
            <div className="login">
                <div className="content-home" style={{padding: '30px', textAlign: 'center'}}>
                    <h1 className="content-home">CVDI</h1>
                    <h2 className="content-home">Componente vital descentralizado de interconexion
                        (sinapsis)</h2>
                    <br/>
                    <h4 className="content-home">Ahora Tus tramites son mas faciles y sencillos.
                        Usando la
                        sinapsis podras ver el
                        avanzar de tus tramites, escojer entre los diferentes tramites disponibles de
                        acuerdo a tu necesidad.</h4>
                    <br/>
                    <Row gutter={16}>
                        <br/>
                        <h2 className="content-home">CVDI tiene su composicion por medio de:</h2>
                        <br/>
                        <br/>
                        <Col span={8}>
                            <Card className="card-neurons" bordered={false}>
                                <h3>Neurones</h3>
                                Entidad distribuida encargada de usar el CEHDUN para generar los
                                microservicios. Compuesta por microservicios, Rutinas, Pool de agentes.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="card-agent" bordered={false}>
                                <h3>Agentes</h3>
                                Entidad qué realiza rutinas con el fin de completar un tramite.
                                <br/>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="card-microservice" title="" bordered={false}>
                                <h3>Microservicios</h3>
                                Serie de pequeños servicios,
                                cada uno ejecutándose de forma autónoma y comunicándose entre sí, por
                                ejemplo, a través de peticiones HTTP a sus API.
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <h3>CVDI Funciona por medio de neurones y agentes que automatizan tus tareas desde
                        un
                        solo click!</h3>
                </div>
            </div>
        );
    }
}

export default HomeContent;
