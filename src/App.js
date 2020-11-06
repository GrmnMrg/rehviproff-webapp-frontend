import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {observer} from 'mobx-react';
import UserStore from './stores/UserStore';
import UserAPICalls from './api/UserAPICalls';
import SubmitButton from './components/SubmitButton';
import './App.css';
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar"
import WorkOrdersListPage from "./pages/WorkOrdersListPage";
import AddWorkOrderPage from "./pages/AddWorkOrderPage";
import WorkOrderPage from "./pages/WorkOrderPage";
import PageNotFound from "./pages/PageNotFound";

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
                                onClick={() => this.logOut()}
                            />
                        </div>
                    </div>
                );

            }

            return (
                <Router>
                    <div className="app">
                        <NavBar/>

                        <div id="page-body">
                            {/* A JSX comment <LoginForm /> */}
                            <Switch>
                                <Route path="/" component={HomePage} exact />
                                <Route path="/workorders" component={WorkOrdersListPage} />
                                <Route path="/add-workorder" component={AddWorkOrderPage} />
                                <Route path="/workorder/:id" component={WorkOrderPage} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            );

        }

    }

}

export default observer(App);