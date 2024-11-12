const Caixa = document.getElementById('caixa');
const Overlay = document.getElementById('IconeOverlay');
const BotaoOverlay = document.getElementById('botao_overlay');

function logar(){
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha-login').value;

  if(login == "admin" && senha == "admin"){
    window.location.href = "Player.html";
  } else {
    alert("Login ou senha inválidos!");
  }
}


BotaoOverlay.addEventListener('click', () => {
  Caixa.classList.toggle('ativar-painel-direito');
});
