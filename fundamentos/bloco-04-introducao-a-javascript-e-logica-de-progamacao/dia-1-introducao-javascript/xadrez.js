let peca = 'Dama';
peca = peca.toLowerCase();

//Todas as referências dos movimentos foram pegas no site https://www.soxadrez.com.br/conteudos/movimentos/

switch (peca) {
    case 'rei':
        console.log(peca+' - Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
        break;

    case 'dama':
        console.log(peca+' - Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
        
        break;

    case 'torre':
        console.log(peca+' - Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        
        break;

    case 'cavalo':
        console.log(peca+' - É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.');
        
        break;
    
    case 'bispo':
        console.log(peca+' - Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.');
        
        break;

    case 'peão':
        console.log(peca+' - Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
        
        break;

    case 'rainha':
        console.log('Em português, o nome da peça é dama, não rainha. Sim! a netflix errou a tradução. Seria "O Gambito da Dama".');
        
        break;

    default:
        console.log('Peça inválida.');
        break;
}