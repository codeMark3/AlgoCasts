// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) { 
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// my solution
// function reverseInt(n) {
//     if (n < 0) {
//         let notN = n * (-1);
//         nString = notN.toString();
//         let reversed = nString.split('').reverse().join('');
//         return Number(reversed) * -1
//     } else {
//         nString = n.toString();
//         let reversed = nString.split('').reverse().join('');
//         return Number(reversed)
//     }
// }