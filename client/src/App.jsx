import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import ChatbotLayout from './layouts/ChatbotLayout'
import Chatbot from "./pages/Chatbot"
import Home from "./pages/Home"
import { CharacterProvider } from './context/CharacterContext' 
import Services from "./components/Services"

const App = () => {
  return (
    <CharacterProvider>
      <div className="font-sans">
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/email-verify' element={<EmailVerify />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/chatbot' element={
            <ChatbotLayout>
              <Chatbot />
            </ChatbotLayout>
          } />
        </Routes>
      </div>
    </CharacterProvider>
  )
}

export default App
