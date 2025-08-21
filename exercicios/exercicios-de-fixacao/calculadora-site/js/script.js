
let primeiroNumero = document.getElementById("nOne")
let segundoNumero = document.getElementById("nTwo")
let soma =document.getElementById("adicao")
let menos = document.getElementById("subtracao")
let vezes = document.getElementById("multiplicacao")
let dividir = document.getElementById("divisao")
let enviarButton = document.getElementById("enviar")
let frase = document.getElementById("result")

enviarButton.addEventListener("click", primeiroNumero, segundoNumero, soma, menos, vezes, dividir)
var numero1= parseFloat(primeiroNumero.value);
var numero2 = parseFloat(segundoNumero.value);

function numero (event){
    event.preventDefault();

    var resultado= getOperacao()
    frase.innerText= `O resultado é: ${resultado}`

    }


function getOperacao(){
    if(soma.checked){
        numero1+numero2
    }

    if(menos.checked){
        numero1-numero2

    }

    if(vezes.checked){
        numero1*numero2
    }

    if(dividir.checked){
        numero1/numero2
    }
}



// form.addEventListener('submit', function(event){

//     event.preventDefault();
//     const numero1= parseFloat(primeiroNumero.value);
//     const numero2= parseFloat(segundoNumero.value);

//     const operacaoSelecionada = document.querySelector('input[name="operacao"]:checked');
//     const operacao = operacaoSelecionada.value;

//     switch(operacao){
//         case 'adicao':
//             console.log("resultado:", numero1+numero2)

//     }
// });
