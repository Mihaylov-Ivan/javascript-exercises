const reverseString = function(word) {
    let characters = [],
        newWord = "";

    characters = word.split("");
    let counter = characters.length - 1;

    characters.forEach(char => {
        newWord += `${characters[counter]}`;
        counter--;
    });

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
