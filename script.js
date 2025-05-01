const toggleSwitch = document.getElementById('toggleSwitch');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const formInner = document.querySelector('.form-inner');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
  } else {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
  }
  formInner.classList.toggle('flipped');
});
