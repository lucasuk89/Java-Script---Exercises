const fake = [2, 4, 5, 1, 6, 7, 10, 22];

function getFirstAndLast(myArray) {
    if (myArray.lenght < 2) {
        return myArray;
    }

    let newArray = [];

    newArray.push(myArray[0]);
    newArray.push(myArray[myArray.length - 1]);

    return newArray;
};

console.log(getFirstAndLast(fake));

