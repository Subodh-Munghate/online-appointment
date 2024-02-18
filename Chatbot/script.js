import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyARXTXvGeFCRBP7ZTdgZh7QDw0Qjd37fbQ";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// const chatHistory = document.querySelector(".chat-history");
// const userInput = document.getElementById("user-input"); // Make sure you add an id="user-input" to your input field
const send_button = document.getElementById("send_button"); // Change id to "send-button"

send_button.addEventListener("click", async () => {



  try {

    var ans1 = document.getElementById("ans1").value;
    var ans2 = document.getElementById("ans2").value;
    var ans3 = document.getElementById("ans3").value;
    var ans4 = document.getElementById("ans4").value;
    var ans5 = document.getElementById("ans5").value;
    var ans6 = document.getElementById("ans6").value;
    var ans7 = document.getElementById("ans7").value;
    var ans8 = document.getElementById("ans8").value;
    var ans9 = document.getElementById("ans9").value;
    var ans10 = document.getElementById("ans10").value;
    // var result = document.getElementById("result").value;
    var userInput = "Q. How would you rate your overall diet and nutrition habits? (1 = Poor, 5 = Excellent)\nAns: " + ans1 +
      "\n\nQ. On a scale of 1 to 5, how consistent are you with drinking an adequate amount of water daily?\nAns: " + ans2 +
      "\n\nQ. Rate your level of physical activity and exercise routine. (1 = Sedentary, 5 = Very active)\nAns: " + ans3 +
      "\n\nQ. well do you manage stress in your daily life? (1 = Poorly, 5 = Very well)\nAns: " + ans4 +
      "\n\nQ. Rate the quality and quantity of sleep you get each night. (1 = Very poor, 5 = Excellent)\nAns: " + ans5 +

      "\n\nQ. How would you rate your mental health and emotional well-being? (1 = Poor, 5 = Excellent)\nAns: " + ans6 +
      "\n\nQ. On a scale of 1 to 5, how often do you undergo preventive health screenings?(1 = Sedentary, 5 = Very active)\nAns: " + ans7 +
      "\n\nQ. Rate your efforts in quitting smoking or reducing tobacco use. (1 = Poorly, 5 = Very well)\nAns: " + ans8 +
      "\n\nQ. proactive are you in reducing your risk of chronic diseases like diabetes and heart disease? (1 = Very poor, 5 = Excellent)\nAns: " + ans9 +
      "\n\nQ. Rate your adherence to good hygiene habits.\nAns: " + ans10 +
      "\n\n\n on the basis of above questions and answers by the user, analysed on this data and give response for the better health and stressfree lifestyle in point to point";

    const userMessage = userInput;
    // userInput.value = "";


    const messageElement = document.createElement("div");
    messageElement.classList.add("user-message");
    messageElement.textContent = userMessage;
    // chatHistory.appendChild(messageElement);

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const botResponse = response.text();

    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    botMessageElement.textContent = botResponse;
    console.log(botMessageElement.textContent);
    document.body.appendChild(botMessageElement); 
    // chatHistory.appendChild(botMessageElement);

  } catch (error) {
    alert(error);
    console.error("Error:", error);
    // Handle errors gracefully, e.g., display an error message to the user
  }

  // chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll to the bottom
});