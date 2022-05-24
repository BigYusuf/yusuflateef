import React from "react";
import Alan  from "./pages/Alan";
import Projects  from "./pages/Projects";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";



const App = () => {
    
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Alan />}/>
            <Route path="projects" element={<Projects />}/>
        </Routes>
    </Router>
  )
};

export default App;