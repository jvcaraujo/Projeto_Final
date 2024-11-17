document.addEventListener('DOMContentLoaded', function () {
    // Função de validação do Login
    function validateLogin() {
       let username = document.getElementById('loginUsername').value.trim();
       let password = document.getElementById('loginPassword').value.trim();
       let isValid = true;

       // Validação do nome de usuário
       if (username === '') {
          document.getElementById('loginUsernameError').style.display = 'block';
          isValid = false;
       } else {
          document.getElementById('loginUsernameError').style.display = 'none';
       }

       // Validação da senha
       if (password === '') {
          document.getElementById('loginPasswordError').style.display = 'block';
          isValid = false;
       } else {
          document.getElementById('loginPasswordError').style.display = 'none';
       }

       return isValid;
    }

    // Exibir mensagem de sucesso de login
    function showSuccessMessage() {
       const successMessage = document.getElementById('loginSuccessMessage');
       successMessage.style.display = 'block';
       successMessage.style.animation = 'fadeIn 0.5s ease-in-out'; // Animação para aparecer

       // Remover a mensagem após 3 segundos
       setTimeout(function() {
          successMessage.style.animation = 'fadeOut 1s ease-in-out'; // Animação para desaparecer
          setTimeout(function() {
             successMessage.style.display = 'none';
          }, 1000); // Tempo para esperar a animação desaparecer
       }, 3000); // Tempo para a mensagem desaparecer após 3 segundos
    }

    // Adicionando event listeners aos formulários
    document.getElementById('loginForm').addEventListener('submit', function (event) {
       event.preventDefault();
       if (validateLogin()) {
          // AQUI você pode adicionar o código para enviar o formulário ou fazer uma ação após a validação
          showSuccessMessage(); // Mostrar mensagem de sucesso após login
       }
    });

    document.getElementById('signupForm').addEventListener('submit', function (event) {
       event.preventDefault();
       if (validateSignup()) {
          // AQUI você pode adicionar o código para enviar o formulário ou fazer uma ação após a validação
          alert("Conta criada com sucesso!");
       }
    });
 });