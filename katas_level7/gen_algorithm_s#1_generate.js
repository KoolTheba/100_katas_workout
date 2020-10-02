// https://www.codewars.com/kata/567d609f1c16d7369c000008
// #algorithms #strings #fundamentals

const generate = length => {
    const arr = [];
    for (let i=0;i<length ;i++) {
       arr.push(Math.round(Math.random()))
    }
    return arr.join('')
}