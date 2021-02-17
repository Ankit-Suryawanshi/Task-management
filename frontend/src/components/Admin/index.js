import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GenerateTask from "./generateTask";

function Admin() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Test management applicatoin</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/generate-task"}>Generate Task</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/show-task"}>Show Task</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/generate-task" component={GenerateTask} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Admin;