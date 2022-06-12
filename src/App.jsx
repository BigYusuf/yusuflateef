import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Alan  from "./pages/Alan";
import Projects  from "./pages/Projects";
import Login  from "./pages/Login";
import TestimonialManager from "./pages/TestimonialManager";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import FolioDetails from "./pages/FolioDetails";
import FolioSkills from "./pages/FolioSkills";



const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" exact element={<Alan />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>}/>
              <Route path="/testimonials" element={<ProtectedRoute><TestimonialManager /></ProtectedRoute>}/>
              <Route path="/details" element={<ProtectedRoute><FolioDetails /></ProtectedRoute>}/>
              <Route path="/skills" element={<ProtectedRoute><FolioSkills /></ProtectedRoute>}/>
          </Routes>
      </Router>
  )
};

export default App;