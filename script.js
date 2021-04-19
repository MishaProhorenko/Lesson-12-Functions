'use sctrict'

//#1

function calcSumm(a, b, c) {

    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return a + b + c
    } else if (typeof a === 'number' && typeof b === 'undefined' && typeof c === 'number') {
        return a + c
    } else if (typeof a === 'undefined' && typeof b === 'number' && typeof c === 'number') {
        return b + c
    } else if (typeof a === 'number' && typeof b === 'number' && typeof c === 'undefined') {
        return a + b
    } else if (typeof a === 'number' && typeof b === 'undefined' && typeof c === 'undefined') {
        return a
    } else if (typeof a === 'undefined' && typeof b === 'number' && typeof c === 'undefined') {
        return b
    } else if (typeof a === 'undefined' && typeof b === 'undefined' && typeof c === 'number') {
        return c
    } else if (typeof a === 'string' && typeof b === 'string' && typeof c === 'string') {
        return a + b + c
    } else if (typeof a === 'string' && typeof b === 'undefined' && typeof c === 'string') {
        return a + c
    } else if (typeof a === 'undefined' && typeof b === 'string' && typeof c === 'string') {
        return b + c
    } else if (typeof a === 'string' && typeof b === 'string' && typeof c === 'undefined') {
        return a + b
    } else if (typeof a === 'string' && typeof b === 'undefined' && typeof c === 'undefined') {
        return a
    } else if (typeof a === 'undefined' && typeof b === 'string' && typeof c === 'undefined') {
        return b
    } else if (typeof a === 'undefined' && typeof b === 'undefined' && typeof c === 'string') {
        return c
    }
}

console.log(calcSumm(1, '1', 1));

//========================================================================

//#3


// let showMessage = function (userName) {
//     if (userName == '' || userName == null) {
//         let requestName = prompt('Введите ваше имя', 'Riger');
//         userName = requestName;
//         if (requestName == '' || requestName == null) {
//             alert('Нужно выбрать имя')
//             let repeatRequestName = prompt('Введите ваше имя', 'Riger');
//             userName = repeatRequestName;
//         }

//     }
//     return `С уважением, ${userName}`
// }
// console.log(showMessage());

//========================================================================

