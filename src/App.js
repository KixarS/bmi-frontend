import React from "react";
import BacktoTop from "./components/BacktoTop/BacktoTop";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Contact from "./pages/Contact";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
  //   <>
  //   <BacktoTop/>
  //   <div className="page-container">
  //       <BrowserRouter>
  //         <Routes>
  //           {/* client */}
  //           <Route path="/" element={<Navigate replace to="/home"/>}/>
  //           <Route path="/home" element={<Home/>}/>
  //           <Route path="/analyze" element={<Analyze/>}/>
  //           <Route path="/contact" element={<Contact/>}/>
  //         </Routes>
  //       </BrowserRouter>
  //   </div>
  // </>
<Contact/>
  );
}

export default App;
