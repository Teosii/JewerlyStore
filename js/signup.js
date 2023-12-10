function validateRegister() {
  var username = document.querySelector(".signUpUsername").value;
  var email = document.querySelector(".signUpEmail").value;
  var password = document.querySelector(".signUpPassword").value;
  var confirmPassword = document.querySelector(".confirmSignUpPassword").value;

  
  if (
    username === "" ||
    password === "" ||
    email === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all fields");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    alert("Registration successful!");
    window.location.href = "index.html";
  }
}
