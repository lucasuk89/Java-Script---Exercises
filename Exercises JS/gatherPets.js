const array = [
    {
        name: 'Malcolm',
        pets: ['Bear', 'Minu'],
    },

    {
        name: 'caroline',
        pets: ['Basil', 'Hamish'],
    },


];

function allPetsNames(bixos) {
    var total = [];

    bixos.forEach(element => {
        total.push(...element.pets)
    });
    return total;

};

console.log(allPetsNames(array));