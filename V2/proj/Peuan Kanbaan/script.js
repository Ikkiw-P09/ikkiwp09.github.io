function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = "";
    appendMessage("คุณ: " + userInput);
  
    // เรียกใช้ Google Gemini API
    fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: userInput })
    })
    .then(response => response.json())
    .then(data => {
      appendMessage("AI: " + data.answer);
    })
    .catch(error => console.error('Error:', error));
  }
  
  function appendMessage(message) {
    var chatHistory = document.getElementById("chat-history");
    var newMessage = document.createElement("p");
    newMessage.innerHTML = message;
    chatHistory.appendChild(newMessage);
  }