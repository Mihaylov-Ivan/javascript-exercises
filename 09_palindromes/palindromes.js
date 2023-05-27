const reverseString = require("../03_reverseString/reverseString");

// const palindromes = function (phrase) {
    
//     punctuation_signs = ["!", ",", "."];
//     array = phrase.split("");

//     array.forEach(symbol => {
//         punctuation_signs.forEach(sign => {
//             if (symbol==sign)
//                 array.splice(array.indexOf(sign), 1);
//         })
//     });

//     array.forEach(symbol => {
//         if (symbol == " ")
//             array.splice(array.indexOf(symbol), 1);
//     });

//     phrase = array.join().toLowerCase();
//     reverse_phrase = reverseString(phrase);

//     return phrase===reverse_phrase;
// };

const palindromes = function (string) {
    // This regex matches anything that is not the letter a-z in the
    // whole string and replaces it with "".
    // It returns true if the string is a palindrome by removing spaces, reversing it, joining the letters again
    // and comparing to original
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};
  

console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
