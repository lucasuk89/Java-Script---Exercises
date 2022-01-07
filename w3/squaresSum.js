/* completar o quadrado da soma da funcao onde é passado quadrado 
de cada numero, e retorna os resultados juntos.*/

let numeros = [20, 10, 20, 5, 8, 9, 30];

function squareSum(numbers) {

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += (numbers[i] * numbers[i]);
        result;
    };


    return result;
};

console.log(squareSum(numeros));