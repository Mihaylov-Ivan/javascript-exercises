const repeatString = function(word, n) {
    let answer = "";
    
    for (let i=0; i<n; i++)
    {
        answer += word;
    }
    
    if (n < 0)
        return "ERROR";
    else
        return answer;
};

// Do not edit below this line
module.exports = repeatString;
