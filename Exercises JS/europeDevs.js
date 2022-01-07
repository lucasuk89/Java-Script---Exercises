var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];




function countDevelopers(list) {

    var total = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
            total++;
        };
    };


    return total;
};

console.log(countDevelopers(list1));
  // 1: Retornar o numero de javaScript developers vindo da Europa.

