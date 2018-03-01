// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;  
}

module.exports = reverse;

////////////////////////////////////////////////////////////////////

// function reverse(str) {
    // 1- solution
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    // return str.split('').reverse().join('');
// }

////////////////////////////////////////////////////////////////////

// function reverse(str) {
    // 2- solution
    // let reversed = '';
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;  
// }

////////////////////////////////////////////////////////////////////

// function reverse(str) {
    // 3- solution
    // return str.split('').reduce((reversed, character) => character + reversed, '');
// }