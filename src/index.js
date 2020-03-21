import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyNav from "./components/navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <MyNav></MyNav>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
