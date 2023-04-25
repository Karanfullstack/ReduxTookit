import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cartPage" element={<CartPage />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
