/*Seu objetivo kata é implementar a diferença da funcao, que subtrai
uma lista de outra lista e retorna o resultado.
Isso deve remover todos os valores da lista a, que estao presentes
na lista b mantendo elas em ordem*/
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [1, 2, 2, 2, 3];
let c = [5, 4, 5, 2, 1];


function arrayDiff(a, b) {
    let newArray = [];
    let notPresentB = [];

    //percorrendo a o array a
    for (let i = 0; i < a.length; i++) {
        let isPresent = false;

        //imprime  o percurso do array inteiro e finaliza false.
        console.log(isPresent);
        //percorrendo o array b
        for (let j = 0; j < b.length; j++) {
            // Se  os elementos  de a forem iguals aos elementos b, porque devemos preparar para remover numeros de a que tem no b
            //
            if (a[i] == b[j]) {
                //adicionar quem nao esta presente no array b

                // colocamos esse isPresent true para dar true 
                isPresent = true;
                console.log(isPresent);
            };
        };
    };

    return newArray;
};


console.log(arrayDiff(a, b));

/*Remover todos os elementos da lista a 
que também estão presentes na lista b.*/

/*Remover da lista A todos elementos que estão no B*/