/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e 
os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics 
#178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de 
acordo com cada uma das chaves.  */

let info = {
    personagem: ['Margarida', 'Tio Patinhas'],
    origem: ['Pato Donald', "Christmas on Bear Mountain, Dell's Four Color Comics #178"],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
    recorrente: ['Sim', 'Sim'],
  };

console.log(info.personagem[0]+' e '+info.personagem[1]);
console.log(info.origem[0]+' e '+info.origem[1]);
console.log(info.nota[0]+' e '+info.nota[1]);

if (info.recorrente[0] === info.recorrente[1]) {
    console.log('Ambos recorrentes // Atenção para essa última linha!');
}