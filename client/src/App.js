import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Prompt from "./components/Prompt";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <br />
        <Body />
        <br />
        <br />
        <Prompt />
      </div>
    </Provider>
  );
}

export default App;
