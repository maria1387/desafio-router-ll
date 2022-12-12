import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PikachuProvider from "./context/PikachuProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PikachuProvider>
     
      <App />
    </PikachuProvider>
  </BrowserRouter>
);
