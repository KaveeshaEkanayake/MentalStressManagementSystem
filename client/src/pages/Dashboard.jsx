import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Bot,
  Users,
  BookOpen,
  Gamepad,
  Menu,
  UserCircle,
} from "lucide-react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

// Sidebar Item Component
const SidebarItem = ({ icon: Icon, label, to, isOpen, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center p-3 text-purple-300 hover:text-white hover:bg-purple-700 rounded-lg transition-colors cursor-pointer"
    >
      <Icon className="w-6 h-6" />
      {isOpen && <span className="ml-4 text-sm font-medium">{label}</span>}
    </Link>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showCharacterCard, setShowCharacterCard] = useState(false); // Popup only opens on click

  return (
    <div className="flex h-screen bg-black text-white relative">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-purple-900 h-full p-4 flex flex-col items-center ${
          sidebarOpen ? "w-64 items-start" : "w-20"
        }`}
      >
        <button
          className="text-white mb-6"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <nav className="flex flex-col gap-4 w-full">
          <SidebarItem
            icon={Home}
            label="Home"
            to="/dashboard"
            isOpen={sidebarOpen}
          />
          <SidebarItem
            icon={UserCircle}
            label="Characters"
            to="#"
            isOpen={sidebarOpen}
            onClick={() => setShowCharacterCard(true)}
          />
          <SidebarItem
            icon={Bot}
            label="Chatbot"
            to="/chatbot"
            isOpen={sidebarOpen}
          />
          <SidebarItem
            icon={Users}
            label="Community Forum"
            to="/forum"
            isOpen={sidebarOpen}
          />
          <SidebarItem
            icon={BookOpen}
            label="Journal"
            to="/journal"
            isOpen={sidebarOpen}
          />
          <SidebarItem
            icon={Gamepad}
            label="Games"
            to="/games"
            isOpen={sidebarOpen}
          />
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Navbar */}
        <header className="bg-gradient-to-r from-purple-800 to-purple-700 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <Header />
        </main>

        {/* Character Selection Popup */}
        {showCharacterCard && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="bg-black border-2 border-purple-500 rounded-2xl p-6 relative w-[90%] max-w-xl shadow-lg">
              {/* Close Button */}
              <button
                onClick={() => setShowCharacterCard(false)}
                className="absolute top-2 right-2 text-purple-300 hover:text-white text-xl"
              >
                ✖
              </button>

              {/* Title */}
              <h2 className="text-white text-2xl font-bold text-center mb-6">
                Select a character
              </h2>

              {/* Character Buttons */}
              <div className="flex justify-between gap-4">
                {/* Character 1 */}
                <button className="bg-black border-2 border-purple-500 rounded-lg p-4 flex flex-col items-center w-1/3 hover:scale-105 transition-transform">
                  <img
                    src={assets.sophia}
                    alt="Character 1"
                    className="w-16 h-16 rounded-full border border-purple-400 mb-2"
                  />
                  <span className="text-white text-sm">Sophia</span>
                </button>

                {/* Character 2 */}
                <button className="bg-black border-2 border-purple-500 rounded-lg p-4 flex flex-col items-center w-1/3 hover:scale-105 transition-transform">
                  <img
                    src={assets.adrian}
                    alt="Character 2"
                    className="w-16 h-16 rounded-full border border-purple-400 mb-2"
                  />
                  <span className="text-white text-sm">Adrian</span>
                </button>

                {/* Character 3 */}
                <button className="bg-black border-2 border-purple-500 rounded-lg p-4 flex flex-col items-center w-1/3 hover:scale-105 transition-transform">
                  <img
                    src={assets.chloe}
                    alt="Character 3"
                    className="w-16 h-16 rounded-full border border-purple-400 mb-2"
                  />
                  <span className="text-white text-sm">Chloe</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
