export const fetchBotResponse = async (userInput) => {
  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBtpTvdhN60oUfkETO7x8hTag7_InqoGZk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Provide a summary for the book titled "${userInput}".`
              }
            ]
          }
        ]
      }),
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      console.error("HTTP Error:", errorText);
      return "Sorry, I couldn't generate a summary for this book.";
    }

    const data = await response.json();
    console.log("Full JSON Response:", data); // Log the full JSON response

    // Extract the text part from the response
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts.length > 0) {
      const text = data.candidates[0].content.parts[0].text || "No summary available.";
      return text; // Return the text part of the response
    } else {
      return "Sorry, I couldn't generate a summary for this book.";
    }
  } catch (error) {
    console.error("Error fetching bot response:", error);
    return "Sorry, I couldn't generate a summary for this book.";
  }
};
