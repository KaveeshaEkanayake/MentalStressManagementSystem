import { useNavigate } from "react-router-dom"

const Navbarchat = ({ sidebarOpen, setSidebarOpen }) => {
   const navigate = useNavigate()
  return (
    <header className="flex items-center justify-between p-4 bg-black border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-purple-400 hover:bg-gray-800"
        >
        </button>
        <h1 onClick={()=>navigate('/dashboard')} className="text-xl font-bold text-purple-400">CheerUp</h1>
      </div>
    </header>
  )
}

export default Navbarchat
