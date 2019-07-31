import React from 'react'
import css from 'styled-jsx/css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import FacebookIcon from '../assets/images/facebook-icon.svg'
import GoogleIcon from '../assets/images/google-icon.svg'

class LoginForm extends React.Component {
  state = {
    loading: false
  }

  onLogin = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleLogin(values)
      }
    });
  };

  handleLogin = async data => {
    this.setState({ loading: true })
    await this.props.login(data)
    this.setState({ loading: false })
    this.props.form.resetFields()
  }

  render() {
    const {
      googleLogin,
      facebookLogin,
      form: {
        getFieldDecorator
      } = {}
    } = this.props
    const { loading } = this.state

    return (
      <div className="login-form">
        <Form onSubmit={this.onLogin} >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Tên đăng nhập"
                size="large"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Mật khẩu"
                size="large"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a href="" className="float-right">Forgot password</a>
          </Form.Item>
          <div className="btn-login">
            <Button
              htmlType="submit"
              type="primary"
              block
              loading={loading}
              onClick={this.onLogin}>
              Login
            </Button>
          </div>
          <div>
            <span>Sign in with</span>
            <GoogleLogin
              clientId="204397365959-ma4obvgefq2bsuiua956of5as8p99kes.apps.googleusercontent.com"
              onSuccess={googleLogin}
              onFailure={googleLogin}
              icon={false}
              render={({ onClick, disabled }) => (
                <img onClick={onClick} className="login-icon" src={GoogleIcon} />
              )}
            />
            <FacebookLogin
              appId="2455304521147376"
              autoLoad={true}
              fields="name,email,picture"
              autoLoad={false}
              callback={facebookLogin}
              render={renderProps => (
                <img className="login-icon" onClick={renderProps.onClick} src={FacebookIcon} />
              )}
            />
            <a href="" className="float-right">Sign up</a>
          </div>
        </Form>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm

const styles = css`
  .login-form {
    margin: 20px 30px;
  }

  .float-right{
    float: right;
  }

  .btn-login {
    margin: 20px 0 10px;
  }

  .login-icon{
    height: 21px;
    margin-left: 13px;
    cursor: pointer;
  }
`