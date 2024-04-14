//variaveis
let perguntaTexto = ("Diga seu primeiro número");
let perguntaTexto2 = ("Diga seu segundo número");


// frase em cima dos botões
let pergunta = document.querySelector("p");
pergunta.innerText = "Entre dois números, escolha que ação quer fazer";

//botões
function nome(){
    

}


function adicao(){
   let num1 = parseFloat(prompt (perguntaTexto));
   let num2 = parseFloat(prompt (perguntaTexto2));
   let resposta = (num1 + num2);
   let mostrar = (` ${num1} + ${num2} = ${resposta}`);
   alert(mostrar);
   historico(mostrar);
}

function subtracao(){
   let num1 = parseFloat(prompt (perguntaTexto));
   let num2 = parseFloat(prompt (perguntaTexto2));
   let resposta = (num1 - num2);
   let mostrar = (` ${num1} - ${num2} = ${resposta}`);
   alert(mostrar);
   historico(mostrar);
}

function divisao(){
   let num1 = parseFloat(prompt (perguntaTexto));
   let num2 = parseFloat(prompt (perguntaTexto2));
   let resposta = (num1 / num2);
   let mostrar = (` ${num1}/${num2} = ${resposta}`);
   alert(mostrar);
   historico(mostrar);
}

function multiplicacao(){
   let num1 = parseFloat(prompt (perguntaTexto));
   let num2 = parseFloat(prompt (perguntaTexto2));
   let resposta = (num1 * num2);
   let mostrar = (` ${num1} x ${num2} = ${resposta}`);
   alert (mostrar);
   historico(mostrar);

}

function historico(mostrar){
   let historico = document.getElementById('resposta1');
   historico.innerHTML = (mostrar);
}



