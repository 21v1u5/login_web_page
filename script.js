const toggleSwitch = document.getElementById('toggleSwitch');
const formInner = document.querySelector('.form-inner');


function updateForm() {
  formInner.classList.toggle('flipped', toggleSwitch.checked);
}

// Atualiza o formulário no carregamento da página
updateForm();

// Atualiza o formulário ao mudar o switch
toggleSwitch.addEventListener('change', updateForm);
