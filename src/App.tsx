import React from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>

      <Route exact path="/page1">
        <Page1 />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </div>
  );
}

export default App;
