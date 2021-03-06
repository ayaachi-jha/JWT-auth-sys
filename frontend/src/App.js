import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Activate from "./containers/Activate/Activate";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm/ResetPasswordConfirm";
import Signup from "./containers/Signup/Signup";
import Layout from "./hoc/Layout";

import { Provider } from 'react-redux';
import store from './store';



const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/reset_password' component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
          <Route exact path='/activate/:uid/:token' component={Activate} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
