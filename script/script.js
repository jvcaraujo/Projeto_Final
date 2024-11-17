// 1. Formulário de Contato - Exibe os dados em um alerta quando o formulário for enviado
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio do formulário de forma tradicional (evita o recarregamento da página)
  
    // Captura os valores preenchidos no formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Exibe os dados do formulário em um alerta
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
});



// 2. Esconder Navbar ao rolar até o final da página (perto do rodapé)
window.addEventListener('scroll', function() {
    // Seleciona o rodapé (footer) e a barra de navegação (navbar)
    var footer = document.querySelector('footer');
    var navbar = document.querySelector('.navbar');
    
    // Verifica se os elementos foram encontrados na página
    if (!footer || !navbar) {
        console.error('footer ou navbar não encontrados!');  // Exibe erro no console se não encontrar os elementos
        return;
    }

    // Calcula a posição da rolagem e as dimensões da página
    var scrollPosition = window.scrollY + window.innerHeight;  // Posição de rolagem + altura da janela
    var pageHeight = document.documentElement.scrollHeight;  // Altura total da página
    var footerHeight = footer.offsetHeight;  // Altura do rodapé

    // (Para depuração) Exibe as variáveis no console
    console.log('scrollPosition:', scrollPosition); 
    console.log('pageHeight:', pageHeight); 
    console.log('footerHeight:', footerHeight); 

    // Verifica se o usuário chegou ao final da página (considerando a altura do rodapé)
    if (scrollPosition >= pageHeight - footerHeight) {
        navbar.classList.add('navbar-hidden');  // Esconde a navbar adicionando a classe "navbar-hidden"
        console.log('Navbar escondida');
    } else {
        navbar.classList.remove('navbar-hidden');  // Exibe a navbar removendo a classe "navbar-hidden"
        console.log('Navbar visível');
    }
});



// 3. Alternância entre o modo claro e o modo escuro
const controleEscuro = document.querySelector('.controle_escuro');  // Seleciona o contêiner do controle de modo escuro
const botao = controleEscuro.querySelector('.botao');  // Seleciona o botão dentro do controle

// Função que alterna entre modo claro e modo escuro
function alternarModo() {
    // Alterna a classe "dark-mode" no body para ativar ou desativar o modo escuro
    document.body.classList.toggle('dark-mode');
    
    // Verifica se o modo escuro foi ativado e move o botão para a posição correta
    if (document.body.classList.contains('dark-mode')) {
        botao.style.transform = 'translateX(37px)';  // Move o botão para a direita no modo escuro
    } else {
        botao.style.transform = 'translateX(0)';  // Volta o botão para a posição original no modo claro
    }
}

// Adiciona o evento de clique no controle para alternar o modo ao clicar
controleEscuro.addEventListener('click', alternarModo);

// Verifica se o modo escuro já está ativado ao carregar a página
if (document.body.classList.contains('dark-mode')) {
    botao.style.transform = 'translateX(37px)';  // Ajusta a posição do botão para o modo escuro ao carregar a página
}
