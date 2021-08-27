const botaoClick = document.getElementById('botao');
const contadorClick = document.getElementById('contador');

window.onload = () => {
    botaoClick.addEventListener('click', () => {
        contadorClick.innerHTML = parseInt(contadorClick.innerHTML, 10) + 1;
    });
}
