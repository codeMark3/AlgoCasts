// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => char === str[str.length - i -1]);
    debugger;
}

module.exports = palindrome;

// my solution
// let reversed = '';
// for (char of str) {
//     reversed = char + reversed;
// }
// return str == reversed ? true : false; 

// s1 solution
    // let reversed = '';
    // for(char of str) {
    //     reversed = char + reversed;
    // }
    // return str === reversed; 

// best solution
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }