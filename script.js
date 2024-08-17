function agendarConsulta() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (nome && email && data && hora) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <h3>Consulta Agendada com Sucesso!</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Data:</strong> ${data}</p>
            <p><strong>Hora:</strong> ${hora}</p>
        `;
        document.getElementById('agendamentoForm').reset(); // Limpa o formulário após o agendamento
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
