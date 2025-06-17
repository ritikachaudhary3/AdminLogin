import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

function App() {
 

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
