import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import React from "react";
import "./App.css";
import Login from "./Pages/Login";
//import Register from './Register';
import Reset from "./Pages/Reset";
import Verify from "./Pages/Verify";
import CreatePassword from "./Pages/CreatePassword";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
