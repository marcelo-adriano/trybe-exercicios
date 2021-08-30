const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
console.log('\nExercício 01---------------------------');
//   Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionarTurno = (objeto, chave, valor) => objeto[chave] = valor;

adicionarTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

console.log('\nExercício 02---------------------------');
//   Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listarChavesDoObjeto = objeto => Object.keys(objeto);
console.log(listarChavesDoObjeto(lesson1));
console.log(listarChavesDoObjeto(lesson2));
console.log(listarChavesDoObjeto(lesson3));


console.log('\nExercício 03---------------------------');
//   Crie uma função para mostrar o tamanho de um objeto.

const mostraTamanhoObjeto = objeto => Object.keys(objeto).length;
console.log(mostraTamanhoObjeto(lesson1));
console.log(mostraTamanhoObjeto(lesson2));
console.log(mostraTamanhoObjeto(lesson3));

console.log('\nExercício 04---------------------------');
//   Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValoresDoObjeto = objeto => Object.values(objeto);
console.log(listarValoresDoObjeto(lesson1));
console.log(listarValoresDoObjeto(lesson2));
console.log(listarValoresDoObjeto(lesson3));

console.log('\nExercício 05---------------------------');
//   Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 :

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons);


console.log('\nExercício 06---------------------------');
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalDeAulos = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

console.log(totalDeAulos());

console.log('\nExercício 07---------------------------');
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const pegarValorPeloNumero = (objeto, numero) => Object.values(objeto)[numero];

console.log(pegarValorPeloNumero(lesson1, 0));

console.log('\nExercício 08---------------------------');
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const esquisita = (objeto, chave, valor) => (objeto[chave] === valor) ? true : false;

console.log(esquisita(lesson3, 'turno', 'noite'));
console.log(esquisita(lesson3, 'materia', 'Maria Clara'));

// -----------------------Bônus -----------------------------------

console.log('\nExercício 01 - Bônus---------------------------');
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const totalDeAulosPorMateria = (materia) => {
    const turmas = Object.keys(allLessons);
    let matematicos = 0
    for (let index = 0; index < turmas.length; index += 1) {
        if (allLessons[turmas[index]].materia === materia) {
            matematicos += allLessons[turmas[index]].numeroEstudantes
        }
    }
    return matematicos;
}
console.log(totalDeAulosPorMateria('Matemática'));

console.log('\nExercício 02 - Bônus---------------------------');
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

function criarRelatorio(objeto, nome) {
    let resposta = {
        professor: nome,
        aulas: [],
        estudantes: 0
    }

    const turmas = Object.keys(objeto);
    for (let index = 0; index < turmas.length; index += 1) {
        if (objeto[turmas[index]].professor === nome) {
            resposta.aulas.push(objeto[turmas[index]].materia);
            resposta.estudantes += objeto[turmas[index]].numeroEstudantes;
        }
    }

    return resposta;
}

console.log(criarRelatorio(allLessons, 'Maria Clara'));
