function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 01

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];

function criarDias(daysArray) {
    let listaDias = document.getElementById('days');

    for (let index = 0; index < daysArray.length; index += 1) {
        let dia = document.createElement('li');
        dia.classList.add('day');
        dia.innerText = daysArray[index];

        dia.addEventListener('click', corSelected);//Parte do exercício 10

        listaDias.appendChild(dia);
    }
}

criarDias(dezDaysList);

function classAdd(arrayOfDays, className){

    let listaDias = document.getElementById('days').children;

    for (let index = 0; index < listaDias.length; index += 1) {
        for (let indexDois = 0; indexDois < arrayOfDays.length; indexDois += 1) {
            if(arrayOfDays[indexDois] == listaDias[index].innerText){
                listaDias[index].classList.add(className);
            }
        }
    }
}

classAdd(dezHolidays, 'holiday');
classAdd(dezFridays, 'friday');

//Exercício 02

function criarBotao(palavra, nomeId) {
    let botaoPai = document.getElementsByClassName('buttons-container')[0];

    let botao = document.createElement('button');
    botao.id = nomeId;
    botao.innerText = palavra;

    botaoPai.appendChild(botao);
}

criarBotao('Feriados', 'btn-holiday');

//Exercício 03

function mudarCorHoliday() {
    let feriados = document.getElementsByClassName('holiday');

    for (let index = 0; index < feriados.length; index += 1) {
        let feriado = feriados[index];
        if(feriado.style.backgroundColor === 'lightcoral') {
            feriado.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            feriado.style.backgroundColor = 'lightcoral';
        }
    }
}

let botaoFeriado = document.getElementById('btn-holiday');
botaoFeriado.addEventListener('click', mudarCorHoliday);

//Exercício 04

criarBotao('Sexta-feira', 'btn-friday');

//Exercício 05

function mudarTextoSexta() {
    let sextas = document.getElementsByClassName('friday');
    
    for (let index = 0; index < sextas.length; index += 1) {
        if(sextas[index].innerText !== 'Sexta!'){
            sextas[index].innerText = 'Sexta!';
        } else {
            sextas[index].innerText = dezFridays[index];
        }
    }
}

let botaoSexta = document.getElementById('btn-friday');
botaoSexta.addEventListener('click', mudarTextoSexta);

//Exercício 06

function zoomIn(evento) {
    evento.target.style.fontSize = 'xxx-large';
}

function zoomOut(evento) {
    evento.target.style.fontSize = '20px';
}

let dias = document.getElementsByClassName('day');
for (let index = 0; index < dias.length; index += 1) {
    dias[index].addEventListener('mouseover', zoomIn);
    dias[index].addEventListener('mouseout', zoomOut);
}

//Exercício 07

function criarTarefas(taskString) {
    let tarefa = document.createElement('span');
    let caixaTarefas = document.getElementsByClassName('my-tasks')[0];

    tarefa.innerText = taskString;

    caixaTarefas.appendChild(tarefa);
    
    adicionaLegenda('green');//Parte do exercício 08
}

criarTarefas('Cozinhar');

//Exercício 08

function adicionaLegenda(corString) {
    let tarefaLegenda = document.createElement('div');
    let caixaTarefas = document.getElementsByClassName('my-tasks')[0];
    
    tarefaLegenda.classList.add('task');
    tarefaLegenda.style.backgroundColor = corString;

    caixaTarefas.appendChild(tarefaLegenda);

    tarefaLegenda.addEventListener('click', classSelected);//Parte do exercício 09
}

//Exercício 09

function classSelected(evento) {
    if(evento.target.className === 'task') {
        evento.target.classList.add('selected');
    } else {
        evento.target.classList.remove('selected');
    }
}

//Exercício 10

function corSelected(evento) {
    let diaSelecionado = evento.target;
    let corLegenda = document.getElementsByClassName('selected')[0].style.backgroundColor;

    if(diaSelecionado.style.color !== corLegenda) {
        diaSelecionado.style.color = corLegenda;
    } else {
        diaSelecionado.style.color = 'rgb(119,119,119)';
    }
}

//Bônus

function criarCompromisso() {
    let compromisso = document.createElement('li');
    let caixaCompromisso = document.getElementsByClassName('task-list')[0];
    let valorInput = document.getElementById('task-input');

    if(valorInput.value.length === 0){
        alert('Vazio!');
    } else {
        compromisso.innerText = valorInput.value;
        caixaCompromisso.appendChild(compromisso);
    }
}

function enterClicado(evento) {
    let enterIsPresed = evento.keyCode;
    if (enterIsPresed == 13) {
        criarCompromisso();
    }
}

let inputTexto = document.getElementById('task-input');
let botaoAdicionar = document.getElementById('btn-add');
botaoAdicionar.addEventListener('click', criarCompromisso);
inputTexto.addEventListener('keydown', enterClicado);