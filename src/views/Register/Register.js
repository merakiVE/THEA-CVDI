import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Button} from 'antd';
import './Register.css'

const FormItem = Form.Item;


class Register extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (form.getFieldValue('password') < 4) {
            callback('Please input password long to 4 digite');
        }
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };

        return (
            <div className="App">
                <br/>
                <Form style={{width: '60%', margin: '0 auto'}} onSubmit={this.handleSubmit}>
                    <h3 className="titleForm">Register of User</h3>
                    <br/>
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                        hasFeedback
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Password"
                        hasFeedback
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!,',
                            }, {
                                len: 4, message: 'please enter your password greater than 4',
                            },
                                {
                                    validator: this.checkConfirm,
                                }],
                        })(
                            <Input type="password"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Confirm Password"
                        hasFeedback
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                Nickname&nbsp;
                                <Tooltip title="What do you want other to call you?">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{
                                required: true, message: 'Please input your nickname!', whitespace: true,
                            }, {
                                len: 4, message: 'please enter your password greater than 4',
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </FormItem>
                </Form>

            </div>
        );
    }
}

const RegisterForm = Form.create()(Register);
export default RegisterForm;
