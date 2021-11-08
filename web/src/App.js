import React from "react";
import {
  Route,
  Routes,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
//screens
import HomePage from "./screens/HomePage";
import "./App.css";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
  return (
    <div>
      <div>{routes}</div>
    </div>
  );
}

export default App;
