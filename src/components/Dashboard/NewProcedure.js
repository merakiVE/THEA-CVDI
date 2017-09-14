//Dependencies
import React, { Component } from 'react';
import './newProcedure.css';

//Ant Disign
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

//NProgress
import NProgress from 'nprogress'

class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: this.props.editable || false,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable });
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } 
            else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue });
                this.props.onChange(this.cacheValue);
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }

    render() {
        const { value, editable } = this.state;

        return (
            <div>
            {
                editable ?
                <div>
                    <Input
                        value={value}
                        onChange={e => this.handleChange(e)}
                    />
                </div>
                :
                <div className="editable-row-text">
                    {value.toString() || ' '}
                </div>
            }
            </div>
        );
    }
}
class NewProcedure extends Component {
    constructor(props) {
        super(props);

        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
        }, 
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
        }, 
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        }, 
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                const { editable } = this.state.data[index].name;
                return (
                    this.state.data.length > 0 ?
                        <div className="editable-row-operations">
                        {
                          editable ?
                            <span>
                                <a onClick={() => this.editDone(index, 'save')}>Save</a>
                                <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                                    <a>Cancel</a>
                                </Popconfirm>
                            </span>
                            :
                            <span>
                                <a onClick={() => this.edit(index)}>Edit</a>

                                <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                                    <a href="">Delete</a>
                                </Popconfirm>
                            </span>
                        }
                        </div>
                    : null
                );

            },
        }];

        this.state = {
            data: [{
                key: '0',
                name: {
                    editable: false,
                    value: 'Edward King 0',
                },
                age: {
                    editable: false,
                    value: '32',
                },
                address: {
                    value: 'London, Park Lane no. 0',
                },
                count: 1,
            }],
        };
    }

    componentDidMount(){
        NProgress.done()
      
    }
    
    renderColumns(data, index, key, text) {
        const { editable, status } = data[index][key];

        if (typeof editable === 'undefined') {
          return text;
        }
        return (
            <EditableCell
                editable={editable}
                value={text}
                onChange={(value, record) => this.handleChange(key, index, value)}
                status={status}
            />
        );
    }
      
    handleChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });

        return (value) => {
            const data = [...this.state.data];
            const target = data.find(item => item.key === key);
            if (target) {
                target[index] = value;
                this.setState({ data });
            }
        };
    }

    edit(index) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({ data });
    }
      
    editDone(index, type) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }

    onDelete = (key) => {
        const data = [...this.state.data];
        this.setState({ data: data.filter(item => item.key !== key) });
    }

    handleAdd = () => {
        const { count, data } = this.state;
        const newData = {
            key: count,
            name: {
                editable: false,
                value: `Edward King ${count}`,
            },
            age: {
                editable: false,
                value: '32',
            },
            address: {
                value: `London, Park Lane no. ${count}`,
            }
       };
        this.setState({
            data: [...data, newData],
            count: count + 1,
        });
    }
      
    render() {
        const { data } = this.state;
        const dataSource = data.map((item) => {
        const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        const columns = this.columns;

        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>New</Button>
                <Table 
                    bordered 
                    dataSource={dataSource} 
                    columns={columns} 
                />;

            </div>
        );
    }
}

export default NewProcedure;
