import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';
import * as LoginStore from '../../store/Login';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

type LoginProps = 
  LoginStore.LoginState
  & typeof LoginStore.actionCreators
  & RouteComponentProps<{}>
  & FormComponentProps;

class Login extends React.Component<LoginProps, {}> {
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form">
        <Form className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              // tslint:disable-next-line:max-line-length
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="#">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="#">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.login,
  LoginStore.actionCreators
)(Form.create<LoginProps>()(Login) as typeof Login);
