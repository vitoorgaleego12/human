// script.js

function toggleForm() {
    var formContainer = document.getElementById('form-container');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
    } else {
        formContainer.classList.add('hidden');
    }
}

function showConfirmation() {
    // Exibe uma mensagem de confirmação e oculta o formulário
    alert("Consulta Agendada!");
    document.getElementById('form-container').classList.add('hidden');
}

// Adiciona um listener de evento ao formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    showConfirmation();
});
