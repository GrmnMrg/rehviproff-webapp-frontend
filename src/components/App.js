import React from 'react';
import { observer } from 'mobx-react';
import UserStore from '../stores/UserStore';
import UserAPICalls from '../api_calls/UserAPICalls';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import './App.css';

class App extends React.Component {

  async componentDidMount() {

    let result = await UserAPICalls.doCheckIfUserIsLoggedIn();

    if (result && result.success) {
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    } else {
      UserStore.isLoggedIn = false;
    }

    UserStore.loading = false;

  }

  async logOut() {

    let result = await UserAPICalls.doLogout();

    if (result && result.success) {
      UserStore.isLoggedIn = false;
      UserStore.username = '';
    } else if (result === false) {
      console.log('something went wrong logging out. Something with the response');
      UserStore.isLoggedIn = false;
      UserStore.username = '';
    }

  }

  render() {

    if (UserStore.loading) {

      return (
        <div className="app">
          <div className="container">
            Loading, please wait...
          </div>
        </div>
      );

    } else {

      if (UserStore.isLoggedIn) {

        return (
          <div className="app">
            <div className="container">
              Welcome, {UserStore.username}
              <SubmitButton 
                text={'Log out'}
                disabled={false}
                onClick={ () => this.logOut() }
              />
            </div>
          </div>
        );

      }

      return (
        <div className="app">
          <div className="container">
            <LoginForm />
          </div>
        </div>
      );

    }

  }

}

export default observer(App);