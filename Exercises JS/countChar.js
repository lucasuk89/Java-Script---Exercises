const countChars1 = countChars('hello', 'h');
const countChars2 = countChars('hello world', 'o');
const countChars3 = countChars('hello world', 'l');
const countChars4 = countChars('hello world', 'k');


function countChars(frase, letra) {

    let total = 0;

    for (let posicao = 0; posicao < frase.length; posicao++) {
        if (frase[posicao] == letra) {
            total++;
        };
    };



    return total;
};

console.log(countChars1);
console.log(countChars2);
console.log(countChars3);
console.log(countChars4);



/* 1.  Criar uma função que recebe uma string e um caractere e retorna a QUANTIDADE de vezes que o caractere aparece na string.
        Criar o resultado a ser incrementado
        Percorrer os valores da string até o limite e comparar com o caractere
            Se for igual incrementar o resultado
            Se não for igual não incrementar o resultado
            Retornar o resultado */
