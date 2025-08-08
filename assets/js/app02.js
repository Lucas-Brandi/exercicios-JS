const botao = document.getElementById("toggleTema");
const icone = botao.querySelector("i");

// Alternar classe no body
botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icone.classList.replace("fa-moon", "fa-sun");
    botao.innerHTML = '<i class="fas fa-sun"></i> Ativar Modo Claro';
  } else {
    icone.classList.replace("fa-sun", "fa-moon");
    botao.innerHTML = '<i class="fas fa-moon"></i> Ativar Modo Escuro';
  }
});
