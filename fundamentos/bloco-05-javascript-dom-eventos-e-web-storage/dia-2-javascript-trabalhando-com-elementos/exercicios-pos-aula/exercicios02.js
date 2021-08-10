    // 1 - Adicione a classe title na tag h1 criada;

    let tituloUm = document.getElementsByTagName('h1')[0];
    tituloUm.className = 'title';

    // 2 - Adicione a classe description nas 3 tags h3 criadas;

    let tituloTres = document.getElementsByTagName('h3');
    for (let index = 0; index < tituloTres.length; index += 1) {
        tituloTres[index].className = 'description';
    }

    // 3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
    
    let sectionRemove = document.getElementsByClassName('left-content')[0];
    let tagMain = document.getElementsByTagName('main')[0];

    tagMain.removeChild(sectionRemove);
    console.log(document.body);
    
    // 4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

    document.getElementsByClassName('right-content')[0].style.marginRight = 'auto';

    // 5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'green';

    // 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

    let todasLis = document.getElementsByTagName('li');
    let unlisted = document.getElementsByTagName('ul')[0];

    unlisted.removeChild(todasLis[8]);
    unlisted.removeChild(todasLis[8]);
