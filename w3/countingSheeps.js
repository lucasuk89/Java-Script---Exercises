myArray = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

function countSheeps(arr) {
    let number = 0;

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === true) {
            number++;
        };
    return number;
};


console.log(countSheeps(myArray));