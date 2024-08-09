import React from 'react';

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="h-64 overflow-y-auto">
      {chatHistory.map((entry, index) => (
        <div
          key={index}
          className={`mb-3 px-3 py-2 rounded-lg ${
            entry.type === "user" ? "bg-gray-200 self-end" : "bg-white text-black self-start"
          }`}
        >
          {entry.message}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
