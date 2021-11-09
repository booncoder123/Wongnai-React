import React, { useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import "./styles/global.css";
//screens
import HomePage from "./screens/HomePage";
import "./App.css";

function App() {
  const routes = (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
  return (
    <div>
      <div>{routes}</div>
    </div>
  );
}

export default App;
