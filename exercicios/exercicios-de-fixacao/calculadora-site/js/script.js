let frase = document.getElementById("result")
let form = document.getElementById("my-form")

form.addEventListener("submit", envioDoFormulario)

function envioDoFormulario(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    let primeiroNumero = Number(formData.get("numberOne"))
    let segundoNumero = Number(formData.get("numberTwo"))
    let operacao = formData.get("operacao")
    let resposta=0

    if(operacao=="+"){
       resposta= primeiroNumero+segundoNumero
    }
    else if(operacao=="-"){
      resposta=  primeiroNumero-segundoNumero

    }
    else if(operacao=="*"){
       resposta= primeiroNumero*segundoNumero
    }
    else if(operacao=="/")
    resposta= primeiroNumero/segundoNumero

    frase.innerText= `O resultado é: ${resposta}`
}

