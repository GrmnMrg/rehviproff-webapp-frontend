import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import MessageBox from './MessageBox';
import UserStore from '../stores/UserStore';
import UserAPICalls from '../api_calls/UserAPICalls';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false,
      msg: ''
    }
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 32) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false,
      msg: this.state.msg
    });
  }

  async logIn() {

    if (!this.state.username) {
      this.setState({
        msg: 'Username cannot be empty',
        password: ''
      });
      return;
    }

    if (!this.state.password) {
      this.setState({
        msg: 'Password cannot be empty'
      });
      return;
    }

    this.setState({
      buttonDisabled: true,
      msg: ''
    });

    let result = await UserAPICalls.doLogin(this.state);

    if (result && result.success) {
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    } else {
      this.setState({
        password: '',
        buttonDisabled: false,
        msg: 'Incorrect username or password'
      });
    }

  }
  
  render() {
    return(
      <div className="loginForm">
        
        Rehviproff Login Form

        <InputField 
          type='text'
          placeholder='Username'
          value={this.state.username ? this.state.username : ''}
          onChange={ (val) => this.setInputValue('username', val) }
        />

        <InputField 
          type='password'
          placeholder='Password'
          value={this.state.password ? this.state.password : ''}
          onChange={ (val) => this.setInputValue('password', val) }
        />

        <SubmitButton
          text={'Log in'}
          disabled={this.state.buttonDisabled}
          onClick={ () => this.logIn() }
        />

        <MessageBox 
          msg={this.state.msg}
        />

      </div>
    );
  }

}

export default LoginForm;