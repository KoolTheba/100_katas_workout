// https://www.codewars.com/kata/5841f680c5c9b092950001ae
// #fundamentals

function generateIntegers(m, n) {
    return Array(n - m + 1).fill().map(() => m++);
 }