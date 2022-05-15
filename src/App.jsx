import React from "react";
import Navbar  from "./component/Navbar";
import Alan  from "./component/Alan";
import Footer  from "./component/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";



const App = () => {
    
  return (
    <Router>
      <Navbar/>
      <main className="main" id="main">
          <Alan/>
      </main>
      <Footer/>
    </Router>
  )
};

export default App;