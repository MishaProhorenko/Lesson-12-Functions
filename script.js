'use sctrict'

//#1

function calcSumm(a, b, c) {
    if (arguments.length === 0) {
        return 'значения не введены';
    }
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
console.log(calcSumm(2, 1, 3));
console.log(calcSumm());
console.log(calcSumm('5', '2', '8'));

//========================================================================

//#2

// function sortStrings (firstString,secondString,thirdString){
//     let strings = [firstString , secondString, thirdString];    
//     strings.sort();
//     console.log(`${strings[0]} ${strings[1]} ${strings[2]}`);

// }
// sortStrings ('Роман'.toLowerCase(), 'федор'.toLowerCase(), 'Екатерина'.toLowerCase());



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

//#4


// function calcTwoNumber(a, b) {
//     if (b === '' || b === null || b === undefined) {
//         return Math.pow(a, 2)
//     }
//     return Math.pow(a, b)
// }
// console.log(calcTwoNumber(3, 2))


//========================================================================