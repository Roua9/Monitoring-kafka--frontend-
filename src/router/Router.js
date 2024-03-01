import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Topics from "../pages/Topics"
import Home from "../components/Home"
import Producer from "../pages/Producer"
import Conumer from "../pages/Conumer"
import LoginForm from "../pages/login/LoginForm"
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/sendMessage" element={<Producer />} />
        <Route path="/consumeMessage" element={<Conumer />} />
      </Routes>
    </div>
  )
}

export default Router
