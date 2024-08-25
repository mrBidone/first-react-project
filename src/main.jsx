import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppWithHTTPS from "./AppWithHTTPS.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithHTTPS />
  </React.StrictMode>
);
