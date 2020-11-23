// https://www.codewars.com/kata/546f922b54af40e1e90001da
// #fundamentals #strings

const alphabetPosition = (text) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return text.replace(/[^a-z]+/gi, '').toLowerCase().split('').map(el => alphabet.indexOf(el) + 1).join(' ')
}