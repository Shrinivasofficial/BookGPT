import React, { useState } from 'react';

export const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async (input) => {
    try {
      setIsLoading(true);
      const response = await fetchBookData(input);
      setIsLoading(false);
      setMessages((prevMessages) => [...prevMessages, { isUser: false, text: response }]);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching book data:', error);
      setMessages((prevMessages) => [...prevMessages, { isUser: false, text: 'I encountered an error while trying to fetch book data.' }]);
    }
  };

  const fetchBookData = async (query) => {
    const apiKey = 'AIzaSyBDXXuGptpJLFl7n13YLm64GXFcM679DVM'; // Replace with your API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      console.log('API Response:', data); // Debugging statement

      if (data.items && data.items.length > 0) {
        const book = data.items[0];
        const title = book.volumeInfo.title;
        const description = book.volumeInfo.description || 'No description available';
        return `The book "${title}" is about: ${description}`;
      } else {
        return 'No book found with that name.';
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
      return 'An error occurred while fetching the book data.';
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { isUser: true, text: userInput }]);
      handleUserInput(userInput);
      setUserInput('');
    }
  };

  return (
    <div className="flex items-center justify-center mt-16 mx-4">
      <div className="w-full max-w-md h-72 p-4 bg-white shadow-md border border-chocolate-400 rounded-lg flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type the book name..."
            className="w-full h-10 border border-chocolate-400 rounded-lg p-2 text-gray-700 mb-4"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="border border-chocolate-400 px-12 py-4 rounded-lg text-white bg-chocolate-400 font-medium text-sm text-center"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Ask'}
          </button>
        </form>
        <div className="mt-4 overflow-y-auto flex-1">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 px-3 py-2 rounded-lg ${message.isUser ? 'bg-gray-200 self-end' : 'bg-blue-500 text-white self-start'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
