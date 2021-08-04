import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Message from "./pages/Message";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Message} />
      </Switch>
    </Router>
  );
}

export default App;
