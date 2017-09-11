//Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

// Ant Disign
import {Form, Icon, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Form style={{margin:'0 auto'}} onSubmit={this.handleSubmit} className="login-form">
                    <h3 className="login-title">Log In</h3>
                    <br/>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot">Forgot password</a>
                        
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to="/register"><a>register now!</a></Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm;
