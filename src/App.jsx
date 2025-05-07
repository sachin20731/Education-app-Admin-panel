import React from 'react'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Admin from './pages/Admin.jsx'
import Dashboardhome from './pages/Dashboardhome.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './pages/Student.jsx'

function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <Dashboard/> */}
      {/* <Admin/> */}
      {/* <Dashboardhome/> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboardhome />} />
        <Route path="/admin-setting" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App