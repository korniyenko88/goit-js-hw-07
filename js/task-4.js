
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  const errors = [];

  if (!emailInput.value.trim()) {
    errors.push('Email is required');
  }
  if (!passwordInput.value.trim()) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  console.log(formData);
  loginForm.reset();
});
