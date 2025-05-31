import { useState } from 'react'
import { Send } from 'lucide-react'
import axios from 'axios'

const MessageInput = ({ setMessages }) => {
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { text: input, sender: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    try {
      const res = await axios.post('http://localhost:4000/api/chat', 
        { message: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )

      setMessages(prev => [...prev, { 
        text: res.data.reply, 
        sender: 'bot' 
      }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't process your message", 
        sender: 'bot' 
      }])
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center px-4 py-3 border-t border-gray-700 bg-black"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-3 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button 
        type="submit"
        className="ml-3 p-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}

export default MessageInput
