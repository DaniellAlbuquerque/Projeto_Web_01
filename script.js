alert('Seja Bem vindos') 
function submitForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (nome === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Substitua 'seu-endpoint-formspree' pelo endpoint fornecido pelo Formspree
    var endpoint = 'https://formspree.io/f/xknldveo';

    // Configurar dados do formulário
    var formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('message', message);

    // Enviar dados para o servidor usando Fetch API
    fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Verificar a resposta do servidor (pode variar dependendo do serviço)
        if (data.ok) {
            alert('Obrigado! Sua mensagem foi enviada com sucesso.');
            // Limpar os campos após o envio
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    });
}

