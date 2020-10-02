// https://www.codewars.com/kata/52ab60b122e82a6375000bad
// #arrays #algorithms #sorting #strings

const sortReindeer = (r) => r.sort((a, b) => a.match(/\s(.+)/)[1].localeCompare(b.match(/\s(.+)/)[1]));