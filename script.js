const btnCadastro = document.querySelector("#cadastro");
const btnLogin = document.querySelector("#volta-login");
const body = document.querySelector('body');

btnCadastro.addEventListener("click", function() {
    body.className = 'js-cadastro';
});

btnLogin.addEventListener("click", function() {
    body.className = 'js-login';
});