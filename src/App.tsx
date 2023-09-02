import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <BrowserRouter>
        <Route exact path="/blog/page1">
          <Page1 />
        </Route>
        <Route exact path="/blog/page2">
          <Page2 />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
