const fibonacci = function(n) {
    n = Number(n);

    if (n<0)
        return "OOPS";
    else if (n==0)
        return 0;

    let arr = [0, 1];
    
    for (let i = 1; i<=n; i++)
        arr[i+1] = arr[i] + arr[i-1];
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
