import React, { Component } from "react";
import "./App.css";
import { ContentComponent } from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentComponent />
      </div>
    );
  }
}

export default App;
