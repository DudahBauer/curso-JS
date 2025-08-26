
let buttonEnviar = document.getElementById("enviar")

buttonEnviar.addEventListener("click", apagarDados)

function apagarDados(event){
    event.preventDefault();
    document.getElementById("my-form").reset()
}




