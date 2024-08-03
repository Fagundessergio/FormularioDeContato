function validarFormulario() {
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erroMsg = document.getElementById('erro-msg');

    erroMsg.textContent = '';

    if (usuario === '') {
        erroMsg.textContent = 'Por favor, insira seu usuário.';
        return false;
    }
    
    if (senha === '') {
        erroMsg.textContent = 'Por favor, insira sua senha.';
        return false;
    }
    alert('Formulário enviado com sucesso!');
}