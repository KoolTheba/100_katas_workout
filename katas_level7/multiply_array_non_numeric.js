// https://www.codewars.com/kata/55ed875819ae85ca8b00005c
// #algorithms #arrays

const multiplyAndFilter = (list, multiplier) => {
    return list
      .filter(elem => typeof(elem) === 'number')
      .map(elem => elem*multiplier)
}