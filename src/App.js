import React, { Component } from "react";
import "./App.css";
import { ContentComponent } from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ContentComponent />
      </div>
    );
  }
}

export default App;
