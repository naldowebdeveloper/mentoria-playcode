/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE) 
		Crie uma função chamada calcularFrete que recebe a sigla do estado como 
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo 
		com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/
function calcularFrete(estado){
	switch (estado){
		case 'MG':
		return console.log("12,50");
		break;

		case 'SP':
		return console.log("23,90");
		break;

		case 'RJ':
		return console.log("18,20");
		break;

		default:
		return console.log("35,90")
	}
}

calcularFrete("RJ");




/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e 
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para 
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/
function nomeMes(mes){
	switch (mes){
		case 1:
		return console.log("Janeiro");
		break

		case 2:
		return console.log("Fevereiro");
		break

		case 3:
		return console.log("Março");

		case 4:
		return console.log("Abril");
		break

		case 5:
		return console.log("Maio");
		break

		case 6:
		return console.log("Junho");
		break

		case 7:
		return console.log("Julho");
		break

		case 8:
		return console.log("Agosto");
		break

		case 9:
		return console.log("Setembro");
		break

		case 10:
		return console.log("Outubro");
		break

		case 11:
		return console.log("Novembro");
		break

		case 12:
		return console.log("Dezembro");
		break

		default:
		return console.log("Mês inválido");
	}
}

nomeMes(1)




/*******************************************************************************
	Tarefa 3: (USE SWITCH CASE) 
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar, 
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica		
*******************************************************************************/
function tabelaPeriodica(elemento){
	switch(elemento){
		case "H":
		return console.log("Hidrogénio")
		break

		case "Li":
		return console.log("Lítio")
		break

		case "Na":
		return console.log("Sódio")
		break

		case "K":
		return console.log("Potássio")
		break

		case "RB":
		return console.log("Rubídio")
		break

		case "Cs":
		return console.log("Césio")
		break

		case "Fr":
		return console.log("Frâncio")
		break
	}
}

tabelaPeriodica("Na");