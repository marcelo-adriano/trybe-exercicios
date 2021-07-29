let custoProduto = 10;
let valorVenda = 20;

let imposto = custoProduto * 0.2;
let lucro = valorVenda - (imposto + custoProduto);

if (custoProduto < 0){
    console.log('Valor do curto é negativo');
} else if (valorVenda < 0){
    console.log('Valor da venda é negativo');
} else {
    console.log('Depois de mil vendas do produto, o lucro será: R$'+lucro*1000);
}