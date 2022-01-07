/*Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it.
 If the two numbers are equal return a or b.
Note: a and b are not ordered!*/

/*
    Dados 2 parametros A e B , que podem ser positivos ou negativos,
    encontre a soma dos parametros entre eles e inclua eles e retorne eles.
    Se os dois numeros forem igual retornar a or b */


function sum(n1, n2) {
    if (n1 == n2) {
        return n1
    } else {
        return n1 + n2
    };


};
console.log(sum(1, 1))


/*usando ternario

function sum(n1,n2){
    
    return a==b ? a : a+b;

};
console.log(sum(1, -10))

*/
