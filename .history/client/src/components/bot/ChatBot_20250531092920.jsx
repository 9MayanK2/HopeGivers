import React, { useState } from 'react';
import './ChatIcon.css';
import apis from 

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi! Ask me anything.' }]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:3000/api/chat', { message: input });
      const botMsg = { sender: 'bot', text: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error getting reply.' }]);
    }
  };

  return (
    <div>
      <div className="chat-icon" onClick={toggleChat}>💬</div>

      {open && (
        <div className="chat-box">
          <div className="chat-header">ChatBot <button onClick={toggleChat}>×</button></div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === 'bot' ? 'bot-msg' : 'user-msg'}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Type your message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
