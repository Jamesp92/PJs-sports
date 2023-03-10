import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "../src/styles.css"
import { BrowserRouter } from "react-router-dom"
import 'bulma/css/bulma.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)