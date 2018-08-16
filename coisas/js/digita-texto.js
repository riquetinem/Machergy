var titulo = "Machergy";
var descricao = "Criando um futuro mais sustentável!";
var result;

var count = 0;
function digitar() {
  result = document.getElementById("result");
  window.setTimeout(function() { inserir(titulo[count]) }, 500);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < titulo.length){
    window.setTimeout(function() { inserir(titulo[count]) }, 100);
  }else{
	count = 0;
	digitarDesc();
    $(".setaInv").removeClass("setaInv");
  }
}

function digitarDesc(){
	finished = document.getElementById("finished");
  	window.setTimeout(function() { inserirDesc(descricao[count]) }, 80);
}
function inserirDesc(letraDesc){
	finished.innerHTML += letraDesc;
  	count++;
  	if(count < descricao.length)
    window.setTimeout(function() { inserirDesc(descricao[count]) }, 10);
}

window.onload = digitar;