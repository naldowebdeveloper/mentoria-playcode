/* Nas tarefas abaixo só é necessário declarar as funções, não é necessário
fazer as chamadas, pois o programa de correção já vai fazer isso. Seu objetivo
é deixar todos os testes na cor verde.
*/


/******************************************************************************* 
	Tarefa 1: 
		Definir uma função chamada triplicarValor. Se essa função receber o número 3 
		por exemplo, ela retorna 9. E se receber o número 100, ela retorna 300.	
*******************************************************************************/
function triplicarValor(valor){
	let multiplica = 3 * valor;
	return multiplica; 
}
console.log(triplicarValor(100));



/******************************************************************************* 
	Tarefa 2: 
		 Definir uma função chamada calcularComissao. Ela vai calcular a comissão dos 
		 vendedores de uma loja. O percentual de comissão é 10%.
*******************************************************************************/
function calcularComissao(){
	let comissao = 50 + 50;
	let percentual = (comissao / 100) * 10;
	return percentual;
}
console.log(calcularComissao());



/******************************************************************************* 
	Tarefa 3: 
		Definir uma função chamada calculaAnosAposentadoria. Ela calcula quantos anos 
		falta para sua aposentadoria. Essa função vai receber dois parâmetros, 
		o primeiro referente a idade da pessoa (30 anos por exemplo) e o segundo 
		referente a idade mínima para aposentar, 65 anos por exemplo.
*******************************************************************************/
function calculaAnosAposentadoria(idadePessoa, idadeMinima){
	return idadePessoa - idadeMinima;
}
console.log(calculaAnosAposentadoria(65, 30));



/******************************************************************************* 
	Tarefa 4: 
		 Definir uma função chamada mostrarMensagem. Ela vai receber a idade da pessoa
		 como parâmetro e mostrar a mensagem:
		 "Faltam X anos para a sua aposentadoria". 
		 Dentro dessa função, use a função criada na tarefa anterior para calcular 
		 os anos que faltam para aposentadoria.
*******************************************************************************/
function mostrarMensagem(num1, num2){
	var a = calculaAnosAposentadoria(num1, num2);
	return "Faltam " + a + " anos para a sua aposentadoria";
}

console.log(mostrarMensagem(65, 55));


/******************************************************************************* 
	Tarefa 5: 
		Definir uma função chamda temperaturaNegativa. Ela vai verificar se a 
		temperatura está negativa. Se estiver abaixo de zero retorna true (verdadeiro) 
		e se estiver acima de zero retorna false (falso)	
*******************************************************************************/
function temperaturaNegativa(tempNegativa, tempPositiva){
	let temperatura =  0;

	if(temperatura < tempNegativa){
		console.log(temperatura);
	}else if(temperatura > tempPositiva){
		console.log(temperatura);
	}
}
temperaturaNegativa(-1, 10);


/* 
Nas próximas tarefas você não precisa definir funções, apenas usar funções
já existentes no Javascript para responder cada questão, colocando os valores de
retorno da chamada das funções dentro das variáveis indicadas, no lugar do null.
Fique a vontade para declarar variáveis de apoio, caso necessário.
Use essa referência Javascript para encontrar as funções:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects
*/


/******************************************************************************* 
	Tarefa 6: 
		Qual a raís quadrada de 289?
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
*******************************************************************************/

let respostaTarefa6 = Math.sqrt(289);
console.log(">>> Tarefa 6: " + respostaTarefa6);



/******************************************************************************* 
	Tarefa 7: 
		Quantos caracteres tem a frase "Ordem e progresso" ?
*******************************************************************************/

let respostaTarefa7 = "Ordem e progresso";
console.log(">>> Tarefa 7: " + respostaTarefa7.length)



/******************************************************************************* 
	Tarefa 8: 
		Qual é a sétima letra da palavra "Dinossauro"
*******************************************************************************/

let respostaTarefa8 = "Dinossauro";
console.log(respostaTarefa8[7]);



/******************************************************************************* 
	Tarefa 9: 
		Use uma função que leia a frase "Eu sei programar em Ruby" e substitua a 
		palavra Ruby pela palavra Javascript.
*******************************************************************************/

let respostaTarefa9 = "Eu sei programar em Ruby";
console.log(respostaTarefa9.replace("Ruby", "Javascript"));



/******************************************************************************* 
	Tarefa 10: 
		Que dia do mês é hoje?
*******************************************************************************/

let respostaTarefa10 = new Date();
console.log(respostaTarefa10.getDate());