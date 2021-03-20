import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RidingDestination from "./components/RidingDestination/RidingDestination";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/SignUp/SignUp";
import Contact from "./components/Contact/Contact";
// import { RiderContextProvider } from "./components/RiderContextProvider/RiderContextProvider";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/ridingDestination">
          <RidingDestination />
        </Route>
        <Route path="/vehicles/:idVehicle">
          <RidingDestination />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
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
