import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./container/login";
import SignUp from "./container/signup";
import AdminHome from "./components/Admin";
import GenerateTask from "./container/Admin/generateTask";

function App() {
  return (<Router>
    <div className="App">

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/admin-home" component={AdminHome} />
            <Route path="/generate-task" component={GenerateTask} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;