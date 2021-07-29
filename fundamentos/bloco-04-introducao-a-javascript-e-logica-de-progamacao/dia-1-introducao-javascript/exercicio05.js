let situacaoCandidata = ['aprovada','lista','reprovada'];
let index = null;

index = Math.round(Math.random()*2);

console.log(index);

switch (index) {
    case 0:
        console.log(situacaoCandidata[index]);
        break;

    case 1:
        console.log(situacaoCandidata[index]);
        break;

    case 2:
        console.log(situacaoCandidata[index]);
        break;
            
    default:
        console.log("Não se aplica!");
        break;
};