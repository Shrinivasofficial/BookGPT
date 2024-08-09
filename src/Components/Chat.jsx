import React, { useState } from "react";
import ChatHistory from "./ChatHistory";
import Loading from "./Loading";
import { fetchBotResponse } from "./apiServices"; // Ensure this path is correct

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const responseText = await fetchBotResponse(userInput); // Use the API service

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: responseText },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: "Sorry, I couldn't generate a summary for this book." },
      ]);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Chat with me 📖</h1>
      <p className="text-sm font-regular text-gray-600 text-center mb-4">Just Ask me about summaries, I'm reading more books. Don't mistake me, If I did'nt respond correctly. </p>

      <div className="chat-container rounded-lg shadow-md p-4 bg-white text-black">
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chocolate-400"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
          disabled={isLoading}
        />
        <button
          className="px-4 py-2 ml-2 rounded-lg bg-chocolate-400 text-white hover:bg-chocolate-500 focus:outline-none"
          onClick={sendMessage}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </div>
      <button
        className="mt-4 block px-4 py-2 rounded-lg bg-chocolate-400 text-white hover:bg-chocolate-500 focus:outline-none"
        onClick={clearChat}
      >
        Clear Chat
      </button>
    </div>
  );
};

export default Chat;
