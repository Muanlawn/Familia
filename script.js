document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    const errorMessage = document.getElementById("error-message");
  
    if (username === "Familia" && password === "11042024") {
      window.location.href = "homepage.html";
    } else {
      errorMessage.textContent = "Invalid username or password!";
    }
  });
  