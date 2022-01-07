
lista = (['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);


function findNeedle(needle) {

    for (let i = 0; i < needle.length; i++) {
        if (needle[i] === 'needle')
            return 'found the needle at position' + " " + i;
    };

};
console.log(findNeedle(lista));



