import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Dashboard from './pages/user/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import About from './pages/About';
import Pagenotfound from './pages/Pagenotfound';
import ForgotPasssword from './pages/auth/ForgotPassword';
import PrivateRoute from './components/Routes/Private';

export default function Routerr() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  )
}
