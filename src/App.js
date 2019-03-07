import React, { Component } from "react";
import "./App.css";
import { Router, Route} from "react-router-dom";
import { history } from "../src/history/history";
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
