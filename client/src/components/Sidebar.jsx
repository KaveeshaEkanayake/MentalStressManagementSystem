import { Menu, Plus, MessageSquare } from 'lucide-react'

const Sidebar = ({ open, setOpen, conversations, setActiveChat, onNewChat }) => {
  return (
    <aside className={`h-full bg-black flex flex-col border-r border-gray-700 transition-all duration-300 ${open ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className={`text-purple-400 font-bold transition-all duration-300 ${open ? 'text-xl' : 'text-2xl'}`}>
          {open ? 'Chatbot' : 'C'}
        </h1>
        <button 
          onClick={() => setOpen(!open)}
          className="p-1 rounded-lg text-purple-400 hover:bg-gray-800 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <button 
        onClick={onNewChat}
        className="flex items-center mx-3 my-4 p-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
      >
        <Plus className="w-5 h-5" />
        {open && <span className="ml-2">New Chat</span>}
      </button>

      <div className="flex-1 overflow-y-auto px-1">
        {conversations.map((conv, index) => (
          <div 
            key={index}
            onClick={() => setActiveChat(conv)}
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-purple-300 cursor-pointer transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            {open && (
              <span className="ml-2 truncate">
                {conv.title || `Chat ${index + 1}`}
              </span>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
