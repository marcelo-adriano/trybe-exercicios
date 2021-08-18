const estados = {
        "AC":"Acre",
        "AL":"Alagoas",
        "AP":"Amapá",
        "AM":"Amazonas",
        "BA":"Bahia",
        "CE":"Ceará",
        "DF":"Distrito Federal",
        "ES":"Espírito Santo",
        "GO":"Goiás",
        "MA":"Maranhão",
        "MT":"Mato Grosso",
        "MS":"Mato Grosso do Sul",
        "MG":"Minas Gerais",
        "PA":"Pará",
        "PB":"Paraíba",
        "PR":"Paraná",
        "PE":"Pernambuco",
        "PI":"Piauí",
        "RJ":"Rio de Janeiro",
        "RN":"Rio Grande do Norte",
        "RS":"Rio Grande do Sul",
        "RO":"Rondônia",
        "RR":"Roraima",
        "SC":"Santa Catarina",
        "SP":"São Paulo",
        "SE":"Sergipe",
        "TO":"Tocantins"
};
const botaoEnviar = document.getElementById('button-submit');
const selectEstados = document.getElementById('state-input');
const dataEnviada = document.getElementById('date-input');
const listaCorreta = document.getElementById('lista-correta');
const listaErrada = document.getElementById('lista-errada');
const nome = document.getElementById('name-input');
const email = document.getElementById('email-input');
const cpf = document.getElementById('cpf-input');
const address = document.getElementById('address-input');
const cidade = document.getElementById('city-input');
const radioCasa = document.getElementById('casa-radio');
const radioApartamento = document.getElementById('apartamento-radio');
const resumo = document.getElementById('resumo');
const cargo = document.getElementById('cargo-input');
const cargoDescricao = document.getElementById('cargo-descricao');
const botaoLimpar = document.getElementById('limpar');

function preencherEstados() {
    for (let key in estados) {
        const itemEstado = document.createElement('option');
        itemEstado.value = key;
        itemEstado.innerText = estados[key];
        selectEstados.appendChild(itemEstado);
    }
}

function tamanhoMaximo(tamanho, maximo) {
    return tamanho <= maximo;
}

function rangeCheck(numero, minimo, maximo) {
    numero = parseInt(numero, 10);
    return numero >= minimo && numero <= maximo;
}

function checkDate() {
    const regex = /(\d{4})\-(\d{2})\-(\d{2})/g;
    const valorData = dataEnviada.value;
    let objetoResposta = {};
    let result = regex.exec(valorData);
    objetoResposta.dia = rangeCheck(result[3], 1, 31);
    objetoResposta.mes = rangeCheck(result[2], 1, 12);
    return objetoResposta;
}

function criarElementoLI(elemento, condicao) {
    const criarLi = document.createElement('li');
    if (condicao) {
        criarLi.innerText = elemento.name + " : " + elemento.value;
        listaCorreta.appendChild(criarLi);
    } else {
        criarLi.innerText = "Erro em " + elemento.name;
        listaErrada.appendChild(criarLi);
    }
}

function criarLiRadio(elemento) {
    const criarLi = document.createElement('li');
    criarLi.innerText = elemento.id + " : " + elemento.checked;
    listaCorreta.appendChild(criarLi);
}

function enviarForm(evento) {
    evento.preventDefault();
    criarElementoLI(nome, tamanhoMaximo(nome.value.length, 40));
    criarElementoLI(email, tamanhoMaximo(email.value.length, 50));
    criarElementoLI(cpf, tamanhoMaximo(cpf.value.length, 11));
    criarElementoLI(address, tamanhoMaximo(address.value.length, 200));
    criarElementoLI(cidade, tamanhoMaximo(cidade.value.length, 28));
    criarElementoLI(selectEstados, true);
    criarLiRadio(radioCasa);
    criarLiRadio(radioApartamento);
    criarElementoLI(resumo, tamanhoMaximo(resumo.value.length, 1000));
    criarElementoLI(cargo, tamanhoMaximo(cargo.value.length, 40));
    criarElementoLI(cargoDescricao, tamanhoMaximo(cargoDescricao.value.length, 500));
    let dateChecked = checkDate();
    if (dateChecked.dia && dateChecked.mes) {
        criarElementoLI(dataEnviada, true);
    } else {
        criarElementoLI(dataEnviada, false);
    }
}

function removeLi(elemento) {
    while(elemento[0]){
        elemento[0].remove();
    }
}

function limparTudo(evento) {
    evento.preventDefault();
    removeLi(listaCorreta.children);
    removeLi(listaErrada.children);
    const pagesInput = document.getElementsByTagName('input');
    for (let index in pagesInput) {
        if (index !== 5 && index !== 6 && !isNaN(index)) {
            pagesInput[index].value = '';
        }
    }
    document.getElementsByTagName('textarea')[0].value = '';
}

preencherEstados();

botaoEnviar.addEventListener('click', enviarForm);
botaoLimpar.addEventListener('click', limparTudo);
