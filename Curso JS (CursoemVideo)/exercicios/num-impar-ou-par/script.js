var numero = document.getElementById("num")
var res = document.getElementById("resposta-container")
var enviarButtun = document.getElementById("calcular")

enviarButtun.addEventListener("click", getNumber)

function getNumber(event){
    let inputNumber = Number(numero.value)
    res.innerHTML = ''

    for(let i = 1; i<=10;  i++){
        let newParagraph = document.createElement("p")
        newParagraph.innerText = `${inputNumber} X ${i} = ${inputNumber * i}`

        res.appendChild(newParagraph)
    }

}
