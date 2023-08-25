
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Ministries from "./components/Ministries";
import Youth from "./components/Youth";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./components/Blog";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";





function App() {
 return (
 <div>
  <Router>
    <Header/> 
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Blog" element={<Blog/>} />
              <Route path="/Ministries" element={<Ministries />} />
              <Route path="/Youth" element={<Youth />} />
        </Routes>
        <Footer/>
  </Router> 
  
 </div>

  );
};

export default App;
