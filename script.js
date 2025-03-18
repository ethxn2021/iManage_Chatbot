document.getElementById("chatbot-icon").addEventListener("click", function () {
  document.getElementById("chatbot-container").classList.toggle("hidden");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("chatbot-container").classList.add("hidden");
});
