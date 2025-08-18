let valorInicial = document.getElementById("inicio")
let valorFinal = document.getElementById("final")
let intervalinho = document.getElementById("intervalo")
let enviarButton= document.getElementById("mandar")
let resultado = document.getElementById("resposta")

enviarButton.addEventListener("click", sequencia)


function sequencia(event) {
    let inicio = Number(valorInicial.value);
    let fim = Number(valorFinal.value);
    let passo = Number(intervalinho.value);

    if (passo <= 0) {
      alert("Intervalo inválido! Use um intervalo de no mínimo 1");
      passo = 1;
    }

    resultado.innerHTML = "Contando:<br>";

    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += passo) {
        resultado.innerHTML +=`${i} 👉 `;
      }
    } else {
      for (let i = inicio; i >= fim; i -= passo) {
        resultado.innerHTML +=`${i} 👉 `;
      }
    }

    resultado.innerHTML += "Chegouu🏁😊!!";
  }



