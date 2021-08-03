/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , 
se não for.

    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false
 */


function ehPalindromo(string){
    let checagem = string.split('').reverse().join('');
    if (checagem === string) {
        return true;
    } else {
        return false;
    }
}

let frase = 'arara'

console.log('A palavra',frase,'é palíndromo?',ehPalindromo(frase));