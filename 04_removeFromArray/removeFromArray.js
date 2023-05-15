// const removeFromArray = 
function removeFromArray(array, ...args) {
    let index = 0;

    args.forEach(arg => {
        if (array.includes(arg)){
            index = array.indexOf(arg);
            array.splice(index, 1);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
