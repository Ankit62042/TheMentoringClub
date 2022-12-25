function login() {
  // Get the username and password values from the form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform authentication using the provided username and password values
  if (authenticate(username, password)) {
    // If authentication is successful, redirect the user to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    // If authentication fails, display an error message
    alert("Invalid username or password");
  }
}

function authenticate(username, password) {
  // For the purpose of this example, we'll just return true if the username is "test" and the password is "test"
  return username == "test" && password == "test";
}
