var ano_nascimento = document.getElementById("ano")
var menina= document.getElementById("feminino")
var menino = document.getElementById("masculino")
var genero = document.getElementById("outro")
var frase = document.getElementById("resposta")
var enviarButton = document.getElementById("enviar")

enviarButton.addEventListener("click", ano)

function ano(event){
    event.preventDefault();
     var nascimento = ano_nascimento.value


    var genero = getGender()
    var idade = calculateAnoNascimento(nascimento)
    frase.innerText = `Você é do sexo ${genero} e você tem ${idade} anos de vida.`

}

function getGender(){
    if(menina.checked){
        return menina.value
    }

    if(menino.checked){
        return menino.value
    }

    return genero.value
}

function calculateAnoNascimento(anoNascimento){
    var idade = new Date().getUTCFullYear()-anoNascimento
    return idade
}

