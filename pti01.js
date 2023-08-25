document.addEventListener("DOMContentLoaded", function() {
    const tela01 = document.getElementById("tela01");
    const telaDeRegistro = document.getElementById("telaDeRegistro");
    const telaDeRegistro02 = document.getElementById("telaDeRegistro02");
  
    const btnRegistrar = document.querySelector("#tela01 .green-button:nth-child(2)");
    const btnTelaDeRegistroRetornar = document.querySelector("#telaDeRegistro button:nth-child(1)");
    const btnTelaDeRegistroProximo = document.querySelector("#telaDeRegistro button:nth-child(2)");
    const btnTelaDeRegistro02Retornar = document.querySelector("#telaDeRegistro02 button:nth-child(1)");
  
    // Mostra somente a tela01 inicialmente
    telaDeRegistro.style.display = "none";
    telaDeRegistro02.style.display = "none";
  
    btnRegistrar.addEventListener("click", function() {
      tela01.style.display = "none";
      telaDeRegistro.style.display = "block";
    });
  
    btnTelaDeRegistroRetornar.addEventListener("click", function() {
      telaDeRegistro.style.display = "none";
      tela01.style.display = "block";
    });
  
    btnTelaDeRegistroProximo.addEventListener("click", function() {
      telaDeRegistro.style.display = "none";
      telaDeRegistro02.style.display = "block";
    });
  
    btnTelaDeRegistro02Retornar.addEventListener("click", function() {
      telaDeRegistro02.style.display = "none";
      telaDeRegistro.style.display = "block";
    });
  });
  