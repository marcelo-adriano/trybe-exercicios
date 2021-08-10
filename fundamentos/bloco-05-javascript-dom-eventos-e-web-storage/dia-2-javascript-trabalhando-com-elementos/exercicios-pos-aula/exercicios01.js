// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let hUm = document.createElement('h1');
hUm.innerText = 'Exercício 5.2';

document.body.appendChild(hUm);

// 2 - Adicione a tag main com a classe main-content como filho da tag body ;

let mainTag = document.createElement('main');
mainTag.className = 'main-content';

document.body.appendChild(mainTag);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';

mainTag.appendChild(sectionCenter);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragrafo = document.createElement('p');
paragrafo.innerText = 'algum texto';

sectionCenter.appendChild(paragrafo);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';

mainTag.appendChild(sectionLeft);


// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';

mainTag.appendChild(sectionRight);


// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let imagemPequena = document.createElement('img');
imagemPequena.className = 'small-image';
imagemPequena.src = 'https://picsum.photos/200';

sectionLeft.appendChild(imagemPequena);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaNaoOrdenada = document.createElement('ul');

for (let index = 0; index < 10; index += 1) {
    let elementoDeLista = document.createElement('li');
    elementoDeLista.innerText = index + 1;

    listaNaoOrdenada.appendChild(elementoDeLista);
}

sectionRight.appendChild(listaNaoOrdenada);

// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. 

for (let index = 0; index < 3; index += 1) {
    let hTres = document.createElement('h3');
    hTres.innerText = 'Subtítulo ' + (index + 1);

    mainTag.appendChild(hTres);
}