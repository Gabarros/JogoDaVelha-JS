var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;


matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;



$(document).ready(function() {

$('#bt_iniciar_jogo').click(function() {



	if ($('#apelido1').val() == "") {
		alert("apelido 1 não foi preenchido");

	
		return false;
	}

	if ($('#apelido2').val() == "") {
		alert("apelido 2 não foi preenchido");
		return false;
	}

	// Salvar os apelidos
	$('#jogador1').html($('#apelido1').val());
	$('#jogador2').html($('#apelido2').val());


	//Controla Visualização das Divs
	$('#pagina_inicial').hide();

	$('#palco_jogo').show();


	
});

$('.jogada').click(function() {
	var id_campo_clicado = this.id;
	jogada(id_campo_clicado);
	
	$('#'+id_campo_clicado).off();
	
	
	
});

function jogada(id)
{
	var icone = "";
	var ponto = 0;

	if ((rodada % 2) == 1) {
		icone = 'url("imagens/marcacao_1.png")';
		ponto = -1;
	} else {
		icone = 'url("imagens/marcacao_2.png")';
		ponto = 1;
	}

	rodada++;

	$('#'+id).css('background-image', icone);

	var linha_coluna = id.split('-');
	matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

	verifica_combinacao();

}


	function verifica_combinacao () {
		// Verifica na Horizontal

		var pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['a'][i];
		}

		ganhador(pontos);

		pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['b'][i];
		}
		ganhador(pontos);

		pontos = 0;

		for(var i = 1; i <= 3; i++){
			pontos += matriz_jogo['a'][i];
		}
		ganhador(pontos);

		// Verifica na vertical

		for(var l = 1; l <= 3; l++){
			pontos = 0;
			pontos += matriz_jogo['a'][l];
			pontos += matriz_jogo['b'][l];
			pontos += matriz_jogo['c'][l];

			ganhador(pontos);
		}



		//Verificar na diagonal

			pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3]
			ganhador(pontos);

			pontos = 0;

			pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
			ganhador(pontos);

			pontos = 0;

	}

	function ganhador (pontos) {
		if (pontos == -3) {
			var jogada = $('#apelido1').val();
			alert( jogada + '  Venceu!');
			$('.jogada').off();
		} else if (pontos == 3) {
			var jogada = $('#apelido2').val();
			alert( jogada + '  venceu!');
			$('.jogada').off();
		}
	}
});