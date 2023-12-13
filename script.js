alert('Seja Bem vindos')

function toggleMenu() {
    var nav = document.querySelector(".header .nav ul");
    nav.classList.toggle("show");
  }

  function toggleMenu() {
    var nav = document.querySelector(".header .nav ul");
    nav.classList.toggle("show");
  }
  
  // Adicione esta função para fechar o menu após clicar em um item
  document.querySelectorAll('.header .nav ul li a').forEach(item => {
    item.addEventListener('click', function() {
      var nav = document.querySelector(".header .nav ul");
      nav.classList.remove("show");
    });
  });
  function toggleMenu() {
    var nav = document.querySelector(".header .nav ul");
    var overlay = document.querySelector(".overlay");
    
    nav.classList.toggle("show");
    overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
    
    if (nav.classList.contains("show")) {
        nav.style.backgroundColor = "var(--color-secundary-dark)";
    } else {
        nav.style.backgroundColor = "transparent";
    }
}

function toggleMenu() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay");

    sidebar.classList.toggle("show");
    overlay.style.display = (overlay.style.display === "block") ? "none" : "block";
}

function toggleMenu() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay");
    var mainMenu = document.querySelector(".header .nav");

    sidebar.classList.toggle("show");
    overlay.style.display = (overlay.style.display === "block") ? "none" : "block";

    // Oculta o menu principal quando o ícone hamburguer é clicado
    mainMenu.style.display = (mainMenu.style.display === "flex") ? "none" : "flex";
}


function toggleMenu() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay");
    var mainMenu = document.querySelector(".header .nav");

    sidebar.classList.toggle("show");
    overlay.style.display = (overlay.style.display === "block") ? "none" : "block";

    // Toggle a visibilidade do menu principal
    mainMenu.style.display = (mainMenu.style.display === "block") ? "none" : "block";

    // Adiciona a classe "centered" ao menu principal para centralizá-lo em desktop
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var desktopBreakpoint = 768;

    if (screenWidth >= desktopBreakpoint) {
        mainMenu.classList.toggle("centered");
    } else {
        mainMenu.classList.remove("centered");
    }
}



  
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

