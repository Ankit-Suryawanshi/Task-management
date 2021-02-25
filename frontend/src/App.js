import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./container/login";
import SignUp from "./container/signup";
//import AdminHome from "./components/Admin";
import GenerateTask from "./container/Admin/generateTask";
import ShowTask from "./container/Admin/showTask";
import ShowDeveloper from "./container/Admin/showDeveloper";

function App(props) {
  const auth = localStorage.getItem('token');
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            {auth ? <>
              {/*<Route path="/admin-home" component={AdminHome} />*/}
              <Route path="/generate-task" component={GenerateTask} />
              <Route path="/available-task" component={ShowTask} />
              <Route path="/show-developer" component={ShowDeveloper} />
            </> : <Route path="/" component={Login} />}
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;