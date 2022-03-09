import React from "react";
import Navbar  from "./component/Navbar";
import Alan  from "./component/Alan";
import Footer  from "./component/Footer";
import {BrowserRouter} from "react-router-dom";
import "./App.css";



const App = () => {
    
  return (

    <BrowserRouter>
    <Navbar/>
    <main className="main" id="main">
        
        <Alan/>
    </main>
        <Footer/>

    </BrowserRouter>
  )
};

export default App;