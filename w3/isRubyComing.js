var list1 = [
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' }

];




function isRubyComing(list) {

    let rubyDevs = false;

    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        if (list[i].language == 'Ruby') {
            console.log("entrei aqui")
            return true;
        };
    };

    return rubyDevs;

};

console.log(isRubyComing(list1));