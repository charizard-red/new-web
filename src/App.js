import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./theme/app.css";

import Header from "./components/Header";
import Footer2 from "./components/Footer2";

import Home from "./pages/Home";
import News from "./pages/News";
import Dashboard from "./pages/Dashboard";
import Klinik from "./pages/Klinik";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/klinik/:id" component={Klinik} />
            <Route component={NotFound} />
          </Switch>
          <Footer2 />
        </div>
      </Router>
    );
  }
}

export default App;
