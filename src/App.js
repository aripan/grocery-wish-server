import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
