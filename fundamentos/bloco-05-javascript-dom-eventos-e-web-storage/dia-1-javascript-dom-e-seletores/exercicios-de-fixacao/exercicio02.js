function alterarCor (elemento, cor){
    console.log(elemento.length);
    if(elemento.length > 0) {
        for(let i = 0; i < elemento.length; i += 1) {
            elemento[i].style.backgroundColor = cor;
        }
    } else {
        elemento.style.backgroundColor = cor;
    }
}

let headerSite = document.getElementById('header-container');
let urgenteSection = document.getElementsByClassName('emergency-tasks');
let naoUrgenteSection = document.getElementsByClassName('no-emergency-tasks');
let urgenteDiv = document.querySelectorAll('.emergency-tasks h3');
let naoUrgenteDiv = document.querySelectorAll('.no-emergency-tasks h3');

alterarCor(headerSite,"#00b069");
alterarCor(urgenteSection,"#ff9f84");
alterarCor(naoUrgenteSection,"#f9db5e");
alterarCor(urgenteDiv,"#a500f3");
alterarCor(naoUrgenteDiv,"#232525");