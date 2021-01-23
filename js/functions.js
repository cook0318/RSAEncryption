//Taken and modified from open source repo for ModularExponentiation: krzkaczor/fme.js on GitHub
function fastModularExponentiation(a, b, n) {
    a = a % n;
    var result = 1n;
    var x = a;

    while(b > 0){
        var leastSignificantBit = b % 2n;
        b = b / 2n;

        if (leastSignificantBit == 1n) {
        result = result * x;
        result = result % n;
        }

        x = x * x;
        x = x % n;
    }

    return result;
};

// min is inclusive, max is exclusive
function getRandomNumberInRange(min, max){
    floatingRandom = Math.random();
    range = max-min;
    unadjustedRandomNumber = Math.floor(floatingRandom*range);
    adjustedRandom = min + unadjustedRandomNumber;
    return adjustedRandom;
}

function GetAllFactorsGreaterThanOne(num){
    let factors = [];
    for(i = Math.round(num/2); i >= 2; i--) {
        if(num % i == 0){
            factors.push(i);
        }
    }
    
    return factors;
}