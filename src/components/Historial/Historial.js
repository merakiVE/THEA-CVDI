//Dependencies
import React, { Component } from 'react';

// Ant Disign
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

const text = `This is my History of paperwork. So far I have used cvdi to use my paperwork.`;

class Historial extends Component {
    render() {
        return (
            <div className="historial">
                <Collapse onChange={callback}>
                    <Panel header={'Primer tramite.'} key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header={'Tramite de partida de cedula Finalizado'} key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header={'Segundo tramite'} key="2">
                        <Collapse defaultActiveKey="2">
                           <Panel header={'Tu tramite esta en evaluacion'} key="2">
                               <p>{text}</p>
                           </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header={'Tercer tramite'} key="3">
                        <Collapse defaultActiveKey="3">
                            <Panel header={'Tu tramite esta siendo procesado en el ultimo paso.'} key="3">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}


export default Historial;
