function salarioAleatorio() {
    return Math.round(Math.random()*8000)
}

let salarioBruto = salarioAleatorio();
let inss = null;
let impostoDeRenda = null;
let salarioBaseIR = null;
let salarioLiquido = null;

//Calcular o INSS
switch (true) {
    case (salarioBruto > 0 && salarioBruto <= 1556.94):
        inss = salarioBruto*0.08;
        break;

    case (salarioBruto > 1556.94 && salarioBruto <= 2594.92):
        inss = salarioBruto*0.09;
        break;

    case (salarioBruto > 2594.92 && salarioBruto <= 5189.82):
        inss = salarioBruto*0.11;
        break;

    case (salarioBruto > 5189.82):
        inss = 570.88;
        break;

    default:
        console.log('Erro com o cálculo do INSS')
        break;
}

salarioBaseIR = salarioBruto - inss;

//Calcular o Imposto de Renda
switch (true) {
    case (salarioBaseIR > 0 && salarioBaseIR <= 1903.98):
        impostoDeRenda = 0;
        break;

    case (salarioBaseIR > 1903.98 && salarioBaseIR <= 2826.65):
        impostoDeRenda = salarioBaseIR*0.075 - 142.8;
        break;

    case (salarioBaseIR > 2826.65 && salarioBaseIR <= 3751.05):
        impostoDeRenda = salarioBaseIR*0.15 - 354.8;
        break;

    case (salarioBaseIR > 3751.05 && salarioBaseIR <= 4664.68):
        impostoDeRenda = salarioBaseIR*0.225 - 636.13;
        break;

    case (salarioBaseIR > 4664.68):
        impostoDeRenda = salarioBaseIR*0.275 - 869.36;
        break;

    default:
        console.log('Erro com o cálculo do Imposto de Renda')
        break;
}

salarioLiquido = salarioBaseIR - impostoDeRenda;

console.log('Salário Bruto - R$'+salarioBruto)
console.log('INSS - R$'+inss)
console.log('Imposto de Renda - R$'+impostoDeRenda)
console.log('Salário Líquido - R$'+salarioLiquido)