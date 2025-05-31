import React from "react";
import { useNavigate } from "react-router-dom";
import Services from "../components/Services"; // adjust path as needed
import Characters from "../components/Characters";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-10 bg-transparent">
        <div
          onClick={() => navigate('/')}
          className="text-2xl font-bold text-purple-300 hover:text-purple-500 transition-all duration-300 hover:animate-pulse cursor-pointer"
        >
          CheerUp
        </div>
        <div className="space-x-6">
          <a href="#Services" className="text-white hover:text-purple-400 transition-colors">Services</a>
          <a href="#Characters" className="text-white hover:text-purple-400 transition-colors">Characters</a>
          <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-start h-screen px-16">
        <div className="max-w-xl">
          <h1 className="text-7xl font-extrabold text-purple-300 mb-6">CheerUp</h1>
          <p className="text-sm text-gray-400 mb-6">
            Welcome to CheerUp, where digital companions bring joy to your everyday life.
            Discover unique characters, uplifting conversations, and personalized support.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 rounded-full border-2 border-purple-500 text-white hover:bg-purple-600 transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Services Section from extracted component */}
      <Services />
      <Characters />
    </div>
  );
}
