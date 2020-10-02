// https://www.codewars.com/kata/5b16490986b6d336c900007d
// #ALGORITHMS #SORTING #ARRAYS #HASHES #DATASTRUCTURES

function myLanguages(results) {
    return Object.keys(results)
        .filter(a => results[a] > 59)
        .sort((a, b) => results[b] - results[a]);
}