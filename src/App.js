import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import ContactUs from "./ContactUs.js";
import DevPortal from "./DevPortal";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dev" element={<DevPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
