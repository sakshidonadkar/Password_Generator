// Select Elements
const input = document.querySelector('.input');
const copy = document.querySelector('.bxs-copy-alt');
const button = document.querySelector('.btn');
const alertContainer = document.querySelector('.alert-container');

// Event Listener for Generate Button
button.addEventListener('click', () => {
  createPassword();
});

// Event Listener for Copy Icon
copy.addEventListener('click', () => {
  if (input.value) {
    copyPassword();
    showAlert("Password Copied");
  } else {
    showAlert("No password to copy!");
  }
});

// Function to Generate Password
function createPassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }
  input.value = password;
}

// Function to Copy Password
function copyPassword() {
  navigator.clipboard.writeText(input.value)
    .then(() => {
      console.log('Password copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy password: ', err);
    });
}

// Function to Show Alert
function showAlert(message) {
  alertContainer.textContent = message;
  alertContainer.classList.add('active');
  setTimeout(() => {
    alertContainer.classList.remove('active');
  }, 2000);
}
