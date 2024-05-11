function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
  
    if (name.trim() == "") {
      alert("Please enter your name");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (message.trim() == "") {
      alert("Please enter your message");
      return false;
    }
  
    return true;
  }
  