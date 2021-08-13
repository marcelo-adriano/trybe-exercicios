let inputFundo = document.getElementById('corFundo');
let inputCorTexto = document.getElementById('corTexto');
let inputTamanhoTexto = document.getElementById('fonteTamanho');
let inputEspacamento = document.getElementById('espacamento');
let selectFonte = document.getElementById('inputFonte');

window.onload = function() {

    restaurarUltimaSessao();

    function restaurarUltimaSessao() {
        let corFundo = localStorage.getItem('corFundo');
        let corTexto = localStorage.getItem('corTexto');
        let fonteTamanho = localStorage.getItem('fonteTamanho');
        let espacamento = localStorage.getItem('espacamento');
        let familia = localStorage.getItem('FontFamily');

        document.body.style.backgroundColor = corFundo;
        inputFundo.value = corFundo;

        document.querySelector('.texto').style.color = corTexto;
        document.querySelector('.titulo').style.color = corTexto;
        inputCorTexto.value = corTexto;

        document.getElementsByTagName('main')[0].style.fontSize = fonteTamanho;
        let regexNumeros = /\d+/;
        let tamanhoSplit = parseInt(fonteTamanho.match(regexNumeros));
        inputTamanhoTexto.value = tamanhoSplit;

        document.getElementsByTagName('main')[0].style.lineHeight = espacamento;
        inputEspacamento.value = espacamento;

        document.getElementsByTagName('main')[0].style.fontFamily = familia;
        selectFonte.value = familia;
    }

}

function mudarBackground(){
    let corpo =  document.body;
    let cor = inputFundo.value;
    corpo.style.backgroundColor = cor;

    localStorage.setItem('corFundo', cor);
}

function mudarCorFonte(){
    let text =  document.querySelector('.texto');
    let title = document.querySelector('.titulo');
    let cor = inputCorTexto.value;
    text.style.color = cor;
    title.style.color = cor;

    localStorage.setItem("corTexto", cor);
}

function mudarTamanhoFonte () {
    let texto = document.getElementsByTagName('main')[0];
    let tamanho = inputTamanhoTexto.value +'px';

    texto.style.fontSize = tamanho;

    localStorage.setItem("fonteTamanho", tamanho);
}

function mudarEspacamento () {
    let texto = document.getElementsByTagName('main')[0];
    let tamanho = inputEspacamento.value;

    texto.style.lineHeight = tamanho;

    localStorage.setItem("espacamento", tamanho);
}

function mudarFamiliaFonte() {
    let texto = document.getElementsByTagName('main')[0];
    let familia = selectFonte.value;

    texto.style.fontFamily = familia;

    localStorage.setItem("FontFamily", familia);
}

inputFundo.addEventListener('change', mudarBackground);
inputCorTexto.addEventListener('change', mudarCorFonte);
inputTamanhoTexto.addEventListener('change', mudarTamanhoFonte);
inputEspacamento.addEventListener('change', mudarEspacamento);
selectFonte.addEventListener('change', mudarFamiliaFonte);