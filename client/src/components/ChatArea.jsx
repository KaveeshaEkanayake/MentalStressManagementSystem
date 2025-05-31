import { useState } from 'react'
import MessageInput from './MessageInput'
import { useCharacter } from '../context/CharacterContext'

const ChatArea = () => {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const { character } = useCharacter()

  const handleSendMessage = async (text) => {
    const newMessages = [...messages, { sender: 'user', text }]
    setMessages(newMessages)
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })

      const data = await res.json()

      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: data.reply }])
        setIsTyping(false)
      }, 1500)
    } catch (err) {
      console.error('Error sending message:', err)
      setIsTyping(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-black overflow-hidden">
      {/* Character name header */}
      {character?.name && (
        <div className="bg-purple-800 text-white text-center py-3 font-semibold text-lg border-b border-purple-600">
          Chatting with {character.name}
        </div>
      )}

      {/* Message area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center text-purple-300">
            <h2 className="text-2xl font-bold mb-2">Start a new conversation</h2>
            <p>Your messages will appear here</p>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  character?.image ? (
                    <img src={character.image} alt={character.name} className="w-8 h-8 rounded-full mr-2 border border-purple-500" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm mr-2">C</div>
                  )
                )}
                <div className={`max-w-[70%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-purple-700 text-white rounded-br-none' : 'bg-gray-800 text-purple-100 rounded-bl-none'}`}>
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm ml-2">U</div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-end justify-start">
                {character?.image ? (
                  <img src={character.image} alt={character.name} className="w-8 h-8 rounded-full mr-2 border border-purple-500" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm mr-2">C</div>
                )}
                <div className="bg-gray-700 text-purple-100 p-3 rounded-2xl text-sm max-w-[70%] animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Message input */}
      <MessageInput setMessages={setMessages} onSendMessage={handleSendMessage} />
    </div>
  )
}

export default ChatArea
