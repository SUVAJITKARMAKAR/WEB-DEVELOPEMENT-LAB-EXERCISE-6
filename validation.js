// Get references to form elements
const registrationForm = document.getElementById('registrationForm');
const userName = document.getElementById('userName');
const userPhoneNumber = document.getElementById('userPhoneNumber');
const userEmail = document.getElementById('userEmail');
const userDate = document.getElementById('userDate');
const userPassword = document.getElementById('userPassword');
const userConfirmPassword = document.getElementById('userConfirmPassword');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the submit button
submitButton.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Validate full name
  if (userName.value.trim() === '') {
    alert('Please enter your full name');
    return;
  }

  // Validate phone number
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(userPhoneNumber.value.replace(/\s/g, ''))) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail.value)) {
    alert('Please enter a valid email address');
    return;
  }

  // Validate date (optional, you can add specific date validation if needed)
  if (userDate.value.trim() === '') {
    alert('Please select a date');
    return;
  }

  // Validate password
  if (userPassword.value.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  // Validate confirm password
  if (userConfirmPassword.value !== userPassword.value) {
    alert('Passwords do not match');
    return;
  }

  // If all validation passes, you can submit the form or perform further actions here.
  registrationForm.submit();
});
