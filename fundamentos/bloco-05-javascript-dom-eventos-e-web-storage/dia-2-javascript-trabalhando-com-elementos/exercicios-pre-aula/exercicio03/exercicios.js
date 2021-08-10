let paiDoPai = document.getElementById('paiDoPai');
let pai = document.getElementById('pai');
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

function removerFilhos(pai, exessao) {
    let indexNode = 0;
    let filhos = pai.childNodes
    let limite = filhos.length;
    
    for (let index = 0; index < limite; index += 1) {
        let checkId = filhos[indexNode].id;
        if (checkId === exessao) {
            indexNode += 1;
        } else {
            pai.removeChild(filhos[indexNode]);
        }
    }
}

removerFilhos(paiDoPai, 'pai')
removerFilhos(pai, 'elementoOndeVoceEsta');
removerFilhos(ondeVoceEsta, 'primeiroFilhoDoFilho')

console.log(paiDoPai);