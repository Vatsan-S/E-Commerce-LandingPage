import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ------------create protected Route----------------  */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
