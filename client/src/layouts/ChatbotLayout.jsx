import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbarchat from '../components/Navbarchat'

const ChatbotLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [conversations, setConversations] = useState([])
  const [activeChat, setActiveChat] = useState(null)

  return (
    <div className="flex flex-col h-screen bg-black text-purple-100">
      <Navbarchat sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          open={sidebarOpen} 
          setOpen={setSidebarOpen}
          conversations={conversations}
          setActiveChat={setActiveChat}
        />
        {children}
      </div>
    </div>
  )
}

export default ChatbotLayout