import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat with me</h3>
            <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages will go here */}
            <p>This is where the chat messages will appear.</p>
          </div>
          <div className="p-4 border-t">
            <input type="text" placeholder="Type a message..." className="w-full p-2 border rounded" />
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;