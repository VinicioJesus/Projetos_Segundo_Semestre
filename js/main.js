"use strict"; /* navegador, siga as regras e mostre mais erros da minha programação*/

function camposvalidos(nome, altura, peso) {
  return nome !== "" && altura !== "" && peso !== "";
}

function mostrarResultado() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (camposvalidos(nome, altura, peso)) {
    const imc = peso / (altura * altura);

    let texto;
    if (imc < 18.5) {
      texto = "e você está abaixo do peso";
    } else if (imc < 25) {
      texto = "e você está com peso ideal. Parabéns";
    } else if (imc < 30) {
      texto = "e você está levemente acima do peso.";
    } else if (imc < 35) {
      texto = "e você está com obesidade grau I";
    } else if (imc < 40) {
      texto = "e você está com obesidade grau II";
    } else {
      texto = "e você está com obesidade grau III";
    }
    resultado.textContent = `${nome} seu imc é  ${imc.toFixed(2)} ${texto}`;
  } else {
    resultado.textContent = "preencha todos os campos!";
  }
}

document.getElementById("calcular").addEventListener("click", mostrarResultado);
