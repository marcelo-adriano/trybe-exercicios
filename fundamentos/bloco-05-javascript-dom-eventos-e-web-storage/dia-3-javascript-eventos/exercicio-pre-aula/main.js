const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function numeroAleatorio() {
    return Math.round(Math.random()*255);
}

function corAleatoria() {
    let cor = 'rgb(';
    cor += numeroAleatorio();
    cor += ',';
    cor += numeroAleatorio();
    cor += ',';
    cor += numeroAleatorio();
    cor += ')';
    return cor;
}


//  Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionarClasse(evento) {
    let alvo = evento.target;
    alvo.className = 'tech';
    let pai = alvo.parentElement;
    let filhos = pai.children;
    let tamanho = filhos.length;
    
    for (let index = 0; index < tamanho; index += 1) {
        if(filhos[index] !== alvo) {
            filhos[index].classList.remove('tech');
        }
    }
}

firstLi.addEventListener('click', adicionarClasse);
secondLi.addEventListener('click', adicionarClasse);
thirdLi.addEventListener('click', adicionarClasse);

//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'; 

function alterarTexto(evento) {
    document.getElementsByClassName('tech')[0].innerText = evento.target.value;
}

input.addEventListener('change', alterarTexto);

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 1. Que tal redirecionar para seu portifólio? "Não, brigado!"

function redirecione() {
    window.location.href = "https://hemansings.com";
}

myWebpage.addEventListener('dblclick', redirecione);

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudarCor(evento) {
    evento.target.style.color = corAleatoria();
}

myWebpage.addEventListener('mouseover', mudarCor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.