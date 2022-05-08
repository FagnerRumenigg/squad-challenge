import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*">
        <h1>
          <center>404 Page Not Found</center>
        </h1>
      </Route>
    </Routes>
  </HashRouter>
);
