//Pedir os Valores
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

//Aviso de número Inicial maior que Número Máximo
    if (de > ate) {
        alert ('Você inseriu os números corretos? Seu número inicial deve ser menor que o número maximo!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }

    let sorteados = [];
    let numero;

//Sortear a quantidade de n. aleatorios que a pessoa escolheu sem repetir
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarBotaoReiniciar();
}

//Criar os números Aleatorios
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Habilitar ou Desabilitar botão reiniciar
function alterarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//Reiniciar o jogo (zerar)
function reiniciar() {
    document.getElementById('quantidade').value = ''; 
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarBotaoReiniciar();
}