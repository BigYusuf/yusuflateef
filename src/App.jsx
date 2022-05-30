import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Alan  from "./pages/Alan";
import Projects  from "./pages/Projects";
import Login  from "./pages/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/auth";



const App = () => {
  return (
    <AuthProvider>
      <Router>
          <Routes>
              <Route path="/" exact element={<Alan />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="projects" element={<ProtectedRoute><Projects /></ProtectedRoute>}/>
          </Routes>
      </Router>
    </AuthProvider>
  )
};

export default App;