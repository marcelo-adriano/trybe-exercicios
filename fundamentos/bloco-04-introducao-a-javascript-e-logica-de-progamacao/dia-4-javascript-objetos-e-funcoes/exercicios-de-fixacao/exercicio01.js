let player = {
    nome: 'Marta',
    ultimoNome: 'Silva',
    idade: 34,
    melhorDoMundo: [2006, 2007, 2008, 2009, 2010, 2018],
    medalhas:{
        ouro: 2,
        prata: 3
    }
};

console.log('A jogadora', player.nome, player.ultimoNome + ' tem', player.idade, 'anos de idade.');
console.log('A jogadora', player.nome, player.ultimoNome, 'foi eleita a melhor do mundo por', player.melhorDoMundo.length, 'vezes.');
console.log('A jogadora possui', player.medalhas.ouro, 'medalhas de ouro e', player.medalhas.prata, 'medalhas de prata.');
