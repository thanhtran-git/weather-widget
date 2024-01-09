import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./CSS/WidgetPageStyle.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
