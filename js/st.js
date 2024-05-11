function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var isValid = true;
  
    if (name.trim() == "") {
      document.getElementById("nameError").innerText = "Please enter your name";
      isValid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }
  
    if (email.trim() == "") {
      document.getElementById("emailError").innerText = "Please enter your email";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Please enter a valid email address";
      isValid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }
  
    if (message.trim() == "") {
      document.getElementById("messageError").innerText = "Please enter your message";
      isValid = false;
    } else {
      document.getElementById("messageError").innerText = "";
    }
  
    if (isValid) {
      var myModal = new bootstrap.Modal(document.getElementById('successModal'), {
        keyboard: false
      });
      myModal.show();
      document.getElementById("contactForm").reset();
    }
  
    return false;
  }