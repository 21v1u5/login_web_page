const loginToggle = document.getElementById('loginToggle');
const singupToggle = document.getElementById('singupToggle');
const loginForm = document.getElementById('loginForm');
const singupForm = document.getElementById('singupForm');
const slider = document.querySelector('.toggle .slider');

loginToggle.addEventListener('click', () => {
    loginToggle.classList.add('active');
    singupToggle.classList.remove('active');
    loginForm.classList.add('active');
    singupForm.classList.remove('active');
    slider.style.transform = 'translatex(0)';
});