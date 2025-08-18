function carregar() {
    var msg = document.getElementById("mensagem");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora= 16
    //var hora = data.getHours();

    msg.innerText = `Agora são ${hora} horas`;

    if (hora >= 6 && hora < 12) {
        img.src = './img/dia.png'
        document.body.style.backgroundColor = "#eddc7b";
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/tarde.png'
        document.body.style.backgroundColor = "#f27b66";
    } else{
         img.src = './img/noite.png'
        document.body.style.backgroundColor = "#413c5e";
    }
}
