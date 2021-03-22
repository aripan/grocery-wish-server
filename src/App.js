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
import { RiderContextProvider } from "./components/RiderContextProvider/RiderContextProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <RiderContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <PrivateRoute path="/ridingDestination">
            <RidingDestination />
          </PrivateRoute>
          <PrivateRoute path="/vehicles/:idVehicle">
            <RidingDestination />
          </PrivateRoute>
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
    </RiderContextProvider>
  );
}

export default App;
