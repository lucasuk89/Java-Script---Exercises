const frase = "eu tenho que contar o numero de vogais nessa frase" //20 vogais
var vowels = "aeiou"

//funcao/metodo eh o getCount  / str= parametro*/
function getCount(str) {
    /* VowelsCount eh uma variavel que ira ARMAZENAR a contagem de vogais na minha frase*/
    var vowelsCount = 0;
    console.log(str);
    // É uma comando que vai percorrer a variavel escolhida começando do zero e vai somar +1 no final do loop. 
    for (let i = 0; i < str.length; i++) {
        /* se ( eu to perguntando pro vowels , se o str[i] eh a letra na posicao i na minha frase, e to comparando com -1, 
        se nao encontrar ele da -1*/
        console.log(i);
        if (vowels.indexOf(str[i]) != -1) {
            console.log("a letra que eu to olhando é uma vogal:" + str[i]);
            vowelsCount++;
        };
    };
    // vai retornar o valor final
    return vowelsCount;
};

console.log(getCount(frase));
console.log(getCount(vowels));



/* 




    para, comecando do 0 , o item eh menor que o comprimento do parametro todo




*/