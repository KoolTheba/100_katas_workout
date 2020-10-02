// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
// #fundamentals

const capitalize = (s, arr) => s.split('').map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join('');