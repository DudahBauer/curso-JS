let textoComOsPontos = document.getElementById("frase-com-a-pontuacao")
let form = document.getElementById("my-form")
console.log(textoComOsPontos)

form.addEventListener("submit", envioDoFormulario)

/**
 *
 * Cuida do envio do formulario
 *
 * @param {HTMLFormElement} event
 */
function envioDoFormulario(event){
    event.preventDefault();
    const dadosDoFormulario= new FormData(event.target)

    let questaoUm = dadosDoFormulario.get("data-de-nascimento")
    let questaoDois = dadosDoFormulario.get("pais-da-hermione")
    let questaoTres = dadosDoFormulario.get("nome-completo-dumbledore")
    let questaoQuatro = dadosDoFormulario.get("feitico")
    let questaoCinco = dadosDoFormulario.get("neville-matou")

    debugger

    let pontos=0
    if(questaoUm.toLowerCase()=="verdadeiro"){
        pontos+=1
    }
    if(questaoDois.toLowerCase()=="falso"){
        pontos+=1
    }
    if(questaoTres.toLowerCase()=="verdadeiro"){
        pontos+=1
    }
    if(questaoQuatro.toLowerCase()=="false"){
        pontos+=1
    }
    if(questaoCinco.toLowerCase()=="verdadeiro"){
        pontos+=1
    }

   textoComOsPontos.innerText=`Você fez ${pontos} pontos`

}
