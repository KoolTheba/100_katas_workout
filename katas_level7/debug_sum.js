// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba
// #bugs #fundamentals

function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  Math.floor(integer).toString();

    for(let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }

    return sum;
}