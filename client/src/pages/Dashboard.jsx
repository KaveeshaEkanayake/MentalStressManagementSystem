import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Home, Bot, Users, BookOpen, Gamepad, Menu, UserCircle } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import { useCharacter } from '../context/CharacterContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [showCharacterCard, setShowCharacterCard] = useState(false);
  const [selected, setSelected] = useState(null);
  const { setCharacter } = useCharacter();
  const navigate = useNavigate();

  const characters = [
    { name: 'Sophia', image: assets.sophia },
    { name: 'Adrian', image: assets.adrian },
    { name: 'Chloe', image: assets.chloe },
  ];

  const handleCharacterSelect = (char) => {
    setCharacter(char);
    setSelected(char.name);
    setShowCharacterCard(false);

    toast.success(`${char.name} selected successfully!`, {
      position: 'top-center',
      autoClose: 2000,
    });

    setTimeout(() => navigate('/chatbot'), 1000);
  };

  return (
    <div className="flex h-screen bg-black text-white relative">
      {/* Sidebar */}
      <div className={`transition-all duration-300 bg-purple-900 h-full p-4 flex flex-col items-center ${sidebarOpen ? 'w-64 items-start' : 'w-20'}`}>
        <button className="text-white mb-6" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
        <nav className="flex flex-col gap-4 w-full">
          <SidebarItem icon={Home} label="Home" to="/dashboard" isOpen={sidebarOpen} />
          <SidebarItem icon={UserCircle} label="Characters" to="#" isOpen={sidebarOpen} onClick={() => setShowCharacterCard(true)} />
          <SidebarItem icon={Bot} label="Chatbot" to="/chatbot" isOpen={sidebarOpen} />
          <SidebarItem icon={Users} label="Community Forum" to="/forum" isOpen={sidebarOpen} />
          <SidebarItem icon={BookOpen} label="Journal" to="/journal" isOpen={sidebarOpen} />
          <SidebarItem icon={Gamepad} label="Games" to="/games" isOpen={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <header className="bg-gradient-to-r from-purple-800 to-purple-700 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Navbar />
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Header />
        </main>

        {/* Character Selection Card Modal */}
        {showCharacterCard && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="bg-black border-2 border-purple-500 rounded-2xl p-6 relative w-[90%] max-w-xl shadow-lg">
              <button
                onClick={() => setShowCharacterCard(false)}
                className="absolute top-2 right-2 text-purple-300 hover:text-white text-xl"
              >
                ✖
              </button>
              <h2 className="text-white text-2xl font-bold text-center mb-6">
                Select a character
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {characters.map((char) => (
                  <div
                    key={char.name}
                    onClick={() => handleCharacterSelect(char)}
                    className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center transition-all duration-200 ${
                      selected === char.name ? 'border-purple-500 bg-purple-900' : 'border-gray-700 hover:border-purple-500'
                    }`}
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-24 h-24 object-cover rounded-full mb-3 border border-purple-500"
                    />
                    <span className="text-lg font-semibold">{char.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
