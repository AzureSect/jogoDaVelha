var jogador , vencedor = null;
var jogadorAtual = document.getElementById('jogadorAtual');
var jogadorVencedor = document.getElementById('vencedor');


mudarJogador('X');


function escolherQuadrado(id){

	if(vencedor != null){
		return;
	}

	var quadrado = document.getElementById(id);
	if(quadrado.innerHTML !== '-'){
		return;
	}

	quadrado.innerHTML = jogador;
	quadrado.style.color = '#000';

	if (jogador === 'X'){
		jogador = 'O';
	} else {
		jogador = 'X';
	}

	mudarJogador(jogador);
	checaVencedor();
}

function mudarJogador(valor){
	jogador = valor;
	jogadorAtual.innerHTML = jogador;
}

function checaVencedor(){
	var quadrado1 = document.getElementById('1');
	var quadrado2 = document.getElementById('2');
	var quadrado3 = document.getElementById('3');
	var quadrado4 = document.getElementById('4');
	var quadrado5 = document.getElementById('5');
	var quadrado6 = document.getElementById('6');
	var quadrado7 = document.getElementById('7');
	var quadrado8 = document.getElementById('8');
	var quadrado9 = document.getElementById('9');

	if(checaSequencia(quadrado1, quadrado2, quadrado3)){
		mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
		selecionarVencedor(quadrado1);
		return;
	}
	if(checaSequencia(quadrado4, quadrado5, quadrado6)){
		mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
		selecionarVencedor(quadrado4);
		return;
	}
	if(checaSequencia(quadrado7, quadrado8, quadrado9)){
		mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
		selecionarVencedor(quadrado7);
		return;
	}

	if(checaSequencia(quadrado1, quadrado4, quadrado7)){
		mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
		selecionarVencedor(quadrado1);
		return;
	}

	if(checaSequencia(quadrado2, quadrado5, quadrado8)){
		mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
		selecionarVencedor(quadrado2);
		return;
	}

	if(checaSequencia(quadrado3, quadrado6, quadrado9)){
		mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
		selecionarVencedor(quadrado3);
		return;
	}
		if(checaSequencia(quadrado1, quadrado5, quadrado9)){
		mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
		selecionarVencedor(quadrado1);
		return;
	}

		if(checaSequencia(quadrado3, quadrado5, quadrado7)){
		mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
		selecionarVencedor(quadrado3);
		return;
	}

}


function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){ 
	quadrado1.style.background = '#0f0';
	quadrado2.style.background = '#0f0';
	quadrado3.style.background = '#0f0';

}

function selecionarVencedor(quadrado){
	vencedor = quadrado.innerHTML;
	jogadorVencedor.innerHTML = vencedor;

}

function checaSequencia(quadrado1, quadrado2, quadrado3){
	var ehigual = false;

	if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
		ehigual = true;
	}

	return ehigual;
}

function reiniciar(){
	vencedor = null;
	jogadorVencedor.innerHTML = '';

	for(var i = 1; i <= 9; i++){
		var quadrado = document.getElementById(i);
		quadrado.style.background = '#eee';
		quadrado.style.color = '#eee';
		quadrado.innerHTML = '-';
	}
	mudarJogador('X');
}