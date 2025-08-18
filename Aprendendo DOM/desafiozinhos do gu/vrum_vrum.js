//velocidade acima de 80 muito rápido, abaixo de 60 está muito baixa entre 60 e 80, está bom
var velCarro = 40;

if (velCarro > 80) {
  console.log("Quer ir de arrasta é? Vai mais devagar");
} else if (velCarro < 60) {
  console.log("Vc está muito devagar, aceleraaaa");
} else if (velCarro >= 60 && velCarro <= 80) {
  console.log("Parabéns!!!");
}
