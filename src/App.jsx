import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Alan  from "./pages/Alan";
import Projects  from "./pages/Projects";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/auth";



const App = () => {
  return (
    <AuthProvider>
      <Router>
          <Routes>
              <Route path="/" element={<Alan />}/>
              <Route path="projects" element={<ProtectedRoute><Projects /></ProtectedRoute>}/>
          </Routes>
      </Router>
    </AuthProvider>
  )
};

export default App;