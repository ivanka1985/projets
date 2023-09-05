
   let form = document.getElementById("myForm");

    function validateForm() {
      let valid = true;

// reset error messages
      document.querySelectorAll(".error").forEach(error => error.textContent = "");

// validate first name and last name
      let prenom = document.getElementById("surname").value;
      let nom = document.getElementById("firstName").value;
      if (prenom.length < 3) {
        document.getElementById("surnameError").textContent = "Prénom doit contenir au moins 3 caractères";
        valid = false;
      }
      if (nom.length < 3) {
        document.getElementById("firstNameError").textContent = "Nom doit contenir au moins 3 caractères";
        valid = false;
      }

// format birthdate (jj-mm-aaaa)
      let dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
      let date = document.getElementById("date").value;
      if (!dateRegex.test(date)) {
        document.getElementById("dateError").textContent = "Format de date incorrect (jj-mm-aaaa)";
        valid = false;
      }

// place of birth
      let lieu = document.getElementById("place").value;
      if (lieu.length < 3) {
        document.getElementById("placeError").textContent = "Lieu de naissance doit contenir au moins 3 caractères";
        valid = false;
      }

// signe
      let signe = document.getElementById("signe").value;
      if (lieu.length < 3) {
        document.getElementById("signeError").textContent = "Vous dever choisir votre signe astrologique";
        valid = false;
      }

// email
      let email = document.getElementById("email").value;
      let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Vous devez saisir votre email";
        valid = false;
      }

// validate password
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;
      let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#?!@%^&*()-])[A-Za-z\d#?!@%^&*()-]{5,}$/;
      if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Mot de passe doit contenir au moins 5 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial (#?!@%^&*()-)";
       valid = false;
      }
      if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "La confirmation du mot de passe ne correspond pas";
       valid = false;
      }

 // message presentation
      let presentation = document.getElementById("presentation").value;
      if (presentation.length < 10 || presentation.length > 15) {
        document.getElementById("presentationError").textContent = "Vous devez saisir une présentation (entre 10 et 15 caractères";
        valid = false;
      }

// all validations passed, redirect to welcome.html
      if (valid) {
        window.location.href = "../formIva/welcome/welcome.html";
      }
// prevent form submission
      return false; 
    }

    function countCharacters() {
      let presentation = document.getElementById("presentation").value;
      let characterCount = presentation.length;
      document.getElementById("characterCount").textContent = `Caractère(s) ${characterCount}`;
    }