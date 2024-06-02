import { useState } from 'react';
import User from './user';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  function handleChange(e){
    setMessage(e.target.value)
  }

  function sendChat(){
    // e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, timestamp: new Date() }]);
      setMessage(`${""}`); // Clear the input field
  }
}
  return (
    <div className="flex flex-col h-[40rem] bg-gray-50 rounded-xl">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 text-white bg-green-800">
        <h1 className="text-xl font-bold">{User.firstName+ ` `+ User.lastName}</h1>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Message from others */}
          <div className="flex">
            <div className="max-w-xs p-4 bg-white shadow rounded-2xl">
              Hello!
            </div>
          </div>

          {/* Message from user */}
          {messages.map((msg, index)=>(
            <div className="flex flex-col items-end" key={index}>
            <div className="max-w-xs p-4 text-white bg-green-800 shadow rounded-2xl">
              {msg.text}
            </div>
            <span className='mt-1 text-sm'>{msg.timestamp.toLocaleTimeString()}</span>
          </div>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <div className="flex items-center p-4 bg-white shadow border-xl">
        <input
          type="text"
          placeholder="Message..."
          className="flex-1 px-4 py-2 mr-4 border rounded-2xl"
          onChange={handleChange}
          name='chatMessage'
          value={message}
        />
        <button className="px-4 py-2 text-white bg-green-800 rounded-2xl" onClick={sendChat}>Send</button>
      </div>
    </div>
  );
}