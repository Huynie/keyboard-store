import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Store from "./components/store";
/* import About from "./components/about";
import Contact from "./components/contact"; */

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Store" component={Store} />
          <Home />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
