import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/squad-challenge/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
