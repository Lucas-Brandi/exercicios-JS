function calcularIMC() {
    const peso = parseFloat(document.querySelector(".peso").value);
    const altura = parseFloat(document.querySelector(".altura").value);
    const resultado = document.querySelector("#resultado");

    if (!peso || !altura) {
        resultado.innerHTML = "<strong>Preencha todos os campos!</strong>";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    resultado.innerHTML = `<strong>Seu IMC:</strong> ${imc.toFixed(2)}<br><strong>Classificação:</strong> ${classificacao}`;
}