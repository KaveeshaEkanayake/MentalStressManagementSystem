import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Bot, Users, BookOpen, Gamepad, Menu } from "lucide-react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

// Updated SidebarItem to use Link for routing
const SidebarItem = ({ icon: Icon, label, to, isOpen }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-3 text-purple-300 hover:text-white hover:bg-purple-700 rounded-lg transition-colors cursor-pointer"
    >
      <Icon className="w-6 h-6" />
      {isOpen && <span className="ml-4 text-sm font-medium">{label}</span>}
    </Link>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <SidebarItem icon={Home} label="Home" to="/dashboard" isOpen={sidebarOpen} />
          <SidebarItem icon={Bot} label="Chatbot" to="/chatbot" isOpen={sidebarOpen} />
          <SidebarItem icon={Users} label="Community Forum" to="/forum" isOpen={sidebarOpen} />
          <SidebarItem icon={BookOpen} label="Journal" to="/journal" isOpen={sidebarOpen} />
          <SidebarItem icon={Gamepad} label="Games" to="/games" isOpen={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Navbar in top-right */}
        <header className="bg-gradient-to-r from-purple-800 to-purple-700 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <Header />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
